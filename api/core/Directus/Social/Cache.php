<?php

namespace Directus\Social;

use Directus\Bootstrap;
use Directus\Db\TableGateway\DirectusSettingsTableGateway;
use Directus\Db\TableGateway\DirectusSocialFeedsTableGateway;
use Directus\Db\TableGateway\DirectusSocialPostsTableGateway;
use Zend\Db\Sql\Expression;
use Zend\Db\Sql\Sql;
use Zend\Db\Sql\Select;

class Cache {

    public static $scrape_interval_seconds = 300; // 5 min

    public function __construct() {
        $acl = Bootstrap::get('acl');
        $ZendDb = Bootstrap::get('ZendDb');
        $this->SocialFeedsTableGateway = new DirectusSocialFeedsTableGateway($acl, $ZendDb);
        $this->SocialPostsTableGateway = new DirectusSocialPostsTableGateway($acl, $ZendDb);
    }

    public function scrapeFeedIfDue($handle, $type) {
        $feed = $this->SocialFeedsTableGateway->getFeedByHandleAndType($handle, $type);
        // Create the feeds table record if it doesn't exist
        if(false === $feed) {
            $this->SocialFeedsTableGateway->insert(array(
                'type' => $type,
                'name' => $handle
            ));
            $feedId = $this->SocialFeedsTableGateway->getLastInsertValue();
            $feed = $this->SocialFeedsTableGateway->find($feedId);
        } else {
            $feed = $feed->toArray();
        }
        // Scrape if due
        $feedIsDue = in_array($feed['last_checked'], array(null, '0000-00-00 00:00:00')) ||
            strtotime($feed['last_checked']) <= $this->getDueDate();
        if($feedIsDue) {
            $this->scrapeFeed($feed);
        }
    }

    private function getDueDate() {
        $due = time() - self::$scrape_interval_seconds;
        $due = date("c", $due);
        return $due;
    }

    /**
     * Most useful for a cron job.
     */
    public function scrapeFeedsIfDue() {
        $dueFeeds = $this->getDueFeeds();
        foreach($dueFeeds as $feed)
            $this->scrapeFeed($feed->toArray());
    }

    /**
     * Most useful for a cron job.
     */
    private function getDueFeeds() {
        $due = $this->getDueDate();
        $select = new Select($this->SocialFeedsTableGateway->getTable());
        $select
            ->where
                ->lessThanOrEqualTo('last_checked', $due)
                ->or->isNull('last_checked')
                ->or->equalTo('last_checked', '0000-00-00 00:00:00');
        return $this->SocialFeedsTableGateway->selectWith($select);
    }

    private function scrapeFeed(array $feed) {
        switch($feed['type']) {
            case DirectusSocialFeedsTableGateway::TYPE_TWITTER:
                $updatedFeed = $this->scrapeTwitterFeed($feed);
                break;
            case DirectusSocialFeedsTableGateway::TYPE_INSTAGRAM:
                $updatedFeed = $this->scrapeInstagramFeed($feed);
                // Do nothing if the API doesn't respond properly
                if(false === $updatedFeed) {
                    return;
                }
                break;
        }
        // Update feed's last_checked value
        $set = array('last_checked' => new Expression('NOW()'));
        $set = array_merge($updatedFeed, $set);
        $where = array('id' => $feed['id']);
        $this->SocialFeedsTableGateway->update($set, $where);
    }

    private function scrapeTwitterFeed(array $feed) {
        $cb = Bootstrap::get('codebird');
        $statuses = (array) $cb->statuses_userTimeline(array('screen_name' => $feed['name']));
        $httpStatus = $statuses['httpstatus'];
        unset($statuses['httpstatus']);
        foreach($statuses as $status) {
            $status = (array) $status;
            unset($status['user']);
            $cachedCopy = $this->SocialPostsTableGateway->feedForeignIdExists($status['id'], $feed['id']);
            if($cachedCopy) {
                // Exists in cache. Does the data need updating?
                $this->updateFeedEntryDataIfNewer($feed, $cachedCopy, $status);
            } else {
                // Never cached. Cache it.
                $published = new \DateTime($status['created_at']);
                $this->newFeedEntry($feed, $status, $published);
            }
        }
        // Update feed user data
        $sampleEntry = (array) $statuses[0];
        $feed['data'] = json_encode($sampleEntry['user']);
        $feed['foreign_id'] = $sampleEntry['user']->id;
        return $feed;
    }

    private function scrapeInstagramFeed(array $feed) {
        // Load the instagram user id onto the feed record if we haven't already
        $feed['foreign_id'] = isset($feed['foreign_id']) ? trim($feed['foreign_id']) : '';
        if(empty($feed['foreign_id'])) {
            $foreignId = $this->getInstagramUserIdByUsername($feed['name']);
            if(false === $foreignId) {
                // Don't do anything if the instagram request fails
                return false;
            }
            $feed['foreign_id'] = $foreignId;
        }
        // Ping endpoint
        $socialSettings = $this->getInstagramSettings();
        $endpoint = "https://api.instagram.com/v1/users/%s/media/recent?client_id=%s&access_token=%s";
        $endpoint = sprintf($endpoint, $feed['foreign_id'], $socialSettings['instagram_client_id']['value'], $socialSettings['instagram_oauth_access_token']['value']);
        try {
            $mediaRecent = file_get_contents($endpoint);
        } catch(\ErrorException $e) {
            // Don't do anything if the instagram request fails
            return false;
        }
        $mediaRecent = json_decode($mediaRecent, true);
        $mediaRecent = $mediaRecent['data'];

        // Scrape entries
        foreach($mediaRecent as $photo) {
            unset($photo['user']);
            $cachedCopy = $this->SocialPostsTableGateway->feedForeignIdExists($photo['id'], $feed['id']);
            if($cachedCopy) {
                // Exists in cache. Does the data need updating?
                $this->updateFeedEntryDataIfNewer($feed, $cachedCopy, $photo);
            } else {
                $created = date("F j, Y, g:i a", $photo['created_time']);
                // Never cached. Cache it.
                $published = new \DateTime($created, new \DateTimeZone("UTC"));
                $this->newFeedEntry($feed, $photo, $published);
            }
        }

        // Update feed user data
        $sampleEntry = (array) $mediaRecent[0];
        $feed['data'] = json_encode($sampleEntry['user']);
        return $feed;
    }

    private function getInstagramSettings() {
        $acl = Bootstrap::get('acl');
        $ZendDb = Bootstrap::get('ZendDb');
        $SettingsTableGateway = new DirectusSettingsTableGateway($acl, $ZendDb);
        $requiredKeys = array('instagram_oauth_access_token','instagram_client_id');
        return $SettingsTableGateway->fetchCollection('social', $requiredKeys);
    }

    private function getInstagramUserIdByUsername($username) {
        // Check database
        $username = strtolower($username);
        $select = new Select($this->SocialFeedsTableGateway->getTable());
        $select->limit(1);
        $select
            ->where
                ->equalTo('name', $username)
                ->isNotNull('foreign_id');
        $feed = $this->SocialFeedsTableGateway->selectWith($select);
        $feed = $feed->current();
        if($feed && strlen(trim($feed['foreign_id']))) {
            return $feed['foreign_id'];
        }
        // Ping endpoint
        $socialSettings = $this->getInstagramSettings();
        $endpoint = "https://api.instagram.com/v1/users/search?q=%s&access_token=%s";
        $endpoint = sprintf($endpoint, urlencode($username), urlencode($socialSettings['instagram_oauth_access_token']['value']));
        try {
            $userData = file_get_contents($endpoint);
        } catch(\ErrorException $e) {
            // Don't do anything if the instagram request fails
            return false;
        }
        $userData = json_decode($userData, true);
        $userData = $userData['data'];
        foreach($userData as $user) {
            if($user['username'] == $username) {
                return $user['id'];
            }
        }
        return false;
    }

    /**
     * If the data of the feed entry has changed since the cached copy was stored, update the data contained in the
     * cached copy.
     * @param  array  $feed  Array representation of the feed. Needs 'id' key.
     * @param  array|DirectusSocialPostRowGateway $cachedEntry
     * @param  array|object  $newEntryData API response record object/array.
     * @return void
     */
    private function updateFeedEntryDataIfNewer(array $feed, $cachedEntry, $newEntryData) {
        if(!is_array($newEntryData))
            $newEntryData = (array) $newEntryData;
        $newEntryData = json_encode($newEntryData);
        if($newEntryData !== $cachedEntry['data']) {
            $set = array('data' => $newEntryData);
            $where = array(
                'foreign_id' => $cachedEntry['foreign_id'],
                'feed' => $feed['id']
            );
            $this->SocialPostsTableGateway->update($set, $where);
        }
    }

    private function newFeedEntry(array $feed, $newEntryData, \DateTime $published) {
        if(!is_array($newEntryData))
            $newEntryData = (array) $newEntryData;
        $entryAsJson = json_encode($newEntryData);
        return $this->SocialPostsTableGateway->insert(array(
            'feed' => $feed['id'],
            'datetime' => $published->format('c'),
            'foreign_id' => $newEntryData['id'],
            'data' => $entryAsJson
        ));
    }

    // private function getFeedIfDue($handle, $type) {
    //     $select = new Select($this->SocialFeedsTableGateway->getTable());
    //     $select->limit(1);
    //     $select
    //         ->where
    //             ->equalTo('name', $handle)
    //             ->equalTo('type', $type)
    //             ->nest
    //                 ->lessThanOrEqualTo('last_checked', $due)
    //                 ->or->isNull('last_checked')
    //                 ->or->equalTo('last_checked', '0000-00-00 00:00:00')
    //             ->unnest;
    //     return $this->SocialFeedsTableGateway->selectWith($select);
    // }

    // private function getFeed($handle, $type) {
    //     $due = $this->getDueDate();
    //     $select = new Select($this->SocialFeedsTableGateway->getTable());
    //     $select->limit(1);
    //     $select
    //         ->where
    //             ->equalTo('name', $handle)
    //             ->equalTo('type', $type)
    //             ->nest
    //                 ->lessThanOrEqualTo('last_checked', $due)
    //                 ->or->isNull('last_checked')
    //                 ->or->equalTo('last_checked', '0000-00-00 00:00:00')
    //             ->unnest;
    //     return $this->SocialFeedsTableGateway->selectWith($select);
    // }

}