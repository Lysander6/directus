(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["df-75","df-0","df-1","df-2","df-3","df-70","df-71","df-72","df-73","df-74"],{"1f21":function(e,t,a){"use strict";function n(e){return function(t){var a=t||{},n=a.width?String(a.width):e.defaultWidth,r=e.formats[n]||e.formats[e.defaultWidth];return r}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n,e.exports=t.default},"2c66":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a("b028")),r=i(a("9686"));function i(e){return e&&e.__esModule?e:{default:e}}var d=/^(\d+)(\.)?/i,o=/\d+/i,u={narrow:/^(fKr|fvt|eKr|vt)/i,abbreviated:/^(f\.Kr\.?|f\.v\.t\.?|e\.Kr\.?|v\.t\.)/i,wide:/^(f.Kr.|før vesterlandsk tidsregning|e.Kr.|vesterlandsk tidsregning)/i},l={any:[/^f/i,/^(v|e)/i]},f={narrow:/^[1234]/i,abbreviated:/^[1234]. kvt\./i,wide:/^[1234]\.? kvartal/i},s={any:[/1/i,/2/i,/3/i,/4/i]},m={narrow:/^[jfmasond]/i,abbreviated:/^(jan.|feb.|mar.|apr.|maj|jun.|jul.|aug.|sep.|okt.|nov.|dec.)/i,wide:/^(januar|februar|marts|april|maj|juni|juli|august|september|oktober|november|december)/i},c={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^maj/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},g={narrow:/^[smtofl]/i,short:/^(søn.|man.|tir.|ons.|tor.|fre.|lør.)/i,abbreviated:/^(søn|man|tir|ons|tor|fre|lør)/i,wide:/^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i},v={narrow:[/^s/i,/^m/i,/^t/i,/^o/i,/^t/i,/^f/i,/^l/i],any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},h={narrow:/^(a|p|midnat|middag|(om) (morgenen|eftermiddagen|aftenen|natten))/i,any:/^([ap]\.?\s?m\.?|midnat|middag|(om) (morgenen|eftermiddagen|aftenen|natten))/i},b={any:{am:/^a/i,pm:/^p/i,midnight:/midnat/i,noon:/middag/i,morning:/morgen/i,afternoon:/eftermiddag/i,evening:/aften/i,night:/nat/i}},p={ordinalNumber:(0,r.default)({matchPattern:d,parsePattern:o,valueCallback:function(e){return parseInt(e,10)}}),era:(0,n.default)({matchPatterns:u,defaultMatchWidth:"wide",parsePatterns:l,defaultParseWidth:"any"}),quarter:(0,n.default)({matchPatterns:f,defaultMatchWidth:"wide",parsePatterns:s,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,n.default)({matchPatterns:m,defaultMatchWidth:"wide",parsePatterns:c,defaultParseWidth:"any"}),day:(0,n.default)({matchPatterns:g,defaultMatchWidth:"wide",parsePatterns:v,defaultParseWidth:"any"}),dayPeriod:(0,n.default)({matchPatterns:h,defaultMatchWidth:"any",parsePatterns:b,defaultParseWidth:"any"})},k=p;t.default=k,e.exports=t.default},9686:function(e,t,a){"use strict";function n(e){return function(t,a){var n=String(t),r=a||{},i=n.match(e.matchPattern);if(!i)return null;var d=i[0],o=n.match(e.parsePattern);if(!o)return null;var u=e.valueCallback?e.valueCallback(o[0]):o[0];return u=r.valueCallback?r.valueCallback(u):u,{value:u,rest:n.slice(d.length)}}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n,e.exports=t.default},"971e":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a("af03"));function r(e){return e&&e.__esModule?e:{default:e}}var i={narrow:["fvt","vt"],abbreviated:["f.v.t.","v.t."],wide:["før vesterlandsk tidsregning","vesterlandsk tidsregning"]},d={narrow:["1","2","3","4"],abbreviated:["1. kvt.","2. kvt.","3. kvt.","4. kvt."],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},o={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mar.","apr.","maj","jun.","jul.","aug.","sep.","okt.","nov.","dec."],wide:["januar","februar","marts","april","maj","juni","juli","august","september","oktober","november","december"]},u={narrow:["S","M","T","O","T","F","L"],short:["sø","ma","ti","on","to","fr","lø"],abbreviated:["søn.","man.","tir.","ons.","tor.","fre.","lør."],wide:["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"]},l={narrow:{am:"a",pm:"p",midnight:"midnat",noon:"middag",morning:"morgen",afternoon:"eftermiddag",evening:"aften",night:"nat"},abbreviated:{am:"AM",pm:"PM",midnight:"midnat",noon:"middag",morning:"morgen",afternoon:"eftermiddag",evening:"aften",night:"nat"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnat",noon:"middag",morning:"morgen",afternoon:"eftermiddag",evening:"aften",night:"nat"}},f={narrow:{am:"a",pm:"p",midnight:"midnat",noon:"middag",morning:"om morgenen",afternoon:"om eftermiddagen",evening:"om aftenen",night:"om natten"},abbreviated:{am:"AM",pm:"PM",midnight:"midnat",noon:"middag",morning:"om morgenen",afternoon:"om eftermiddagen",evening:"om aftenen",night:"om natten"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnat",noon:"middag",morning:"om morgenen",afternoon:"om eftermiddagen",evening:"om aftenen",night:"om natten"}};function s(e){var t=Number(e);return t+"."}var m={ordinalNumber:s,era:(0,n.default)({values:i,defaultWidth:"wide"}),quarter:(0,n.default)({values:d,defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,n.default)({values:o,defaultWidth:"wide"}),day:(0,n.default)({values:u,defaultWidth:"wide"}),dayPeriod:(0,n.default)({values:l,defaultWidth:"wide",formattingValues:f,defaultFormattingWidth:"wide"})},c=m;t.default=c,e.exports=t.default},af03:function(e,t,a){"use strict";function n(e){return function(t,a){var n,r=a||{},i=r.context?String(r.context):"standalone";if("formatting"===i&&e.formattingValues){var d=e.defaultFormattingWidth||e.defaultWidth,o=r.width?String(r.width):d;n=e.formattingValues[o]||e.formattingValues[d]}else{var u=e.defaultWidth,l=r.width?String(r.width):e.defaultWidth;n=e.values[l]||e.values[u]}var f=e.argumentCallback?e.argumentCallback(t):t;return n[f]}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n,e.exports=t.default},b028:function(e,t,a){"use strict";function n(e){return function(t,a){var n=String(t),d=a||{},o=d.width,u=o&&e.matchPatterns[o]||e.matchPatterns[e.defaultMatchWidth],l=n.match(u);if(!l)return null;var f,s=l[0],m=o&&e.parsePatterns[o]||e.parsePatterns[e.defaultParseWidth];return f="[object Array]"===Object.prototype.toString.call(m)?i(m,(function(e){return e.test(s)})):r(m,(function(e){return e.test(s)})),f=e.valueCallback?e.valueCallback(f):f,f=d.valueCallback?d.valueCallback(f):f,{value:f,rest:n.slice(s.length)}}}function r(e,t){for(var a in e)if(e.hasOwnProperty(a)&&t(e[a]))return a}function i(e,t){for(var a=0;a<e.length;a++)if(t(e[a]))return a}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n,e.exports=t.default},bc2f:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a("1f21"));function r(e){return e&&e.__esModule?e:{default:e}}var i={full:"EEEE 'den' d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd/MM/y"},d={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},o={full:"{{date}} 'kl'. {{time}}",long:"{{date}} 'kl'. {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},u={date:(0,n.default)({formats:i,defaultWidth:"full"}),time:(0,n.default)({formats:d,defaultWidth:"full"}),dateTime:(0,n.default)({formats:o,defaultWidth:"full"})},l=u;t.default=l,e.exports=t.default},e954:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var n={lessThanXSeconds:{one:"mindre end ét sekund",other:"mindre end {{count}} sekunder"},xSeconds:{one:"1 sekund",other:"{{count}} sekunder"},halfAMinute:"ét halvt minut",lessThanXMinutes:{one:"mindre end ét minut",other:"mindre end {{count}} minutter"},xMinutes:{one:"1 minut",other:"{{count}} minutter"},aboutXHours:{one:"cirka 1 time",other:"cirka {{count}} timer"},xHours:{one:"1 time",other:"{{count}} timer"},xDays:{one:"1 dag",other:"{{count}} dage"},aboutXWeeks:{one:"cirka 1 uge",other:"cirka {{count}} uger"},xWeeks:{one:"1 uge",other:"{{count}} uger"},aboutXMonths:{one:"cirka 1 måned",other:"cirka {{count}} måneder"},xMonths:{one:"1 måned",other:"{{count}} måneder"},aboutXYears:{one:"cirka 1 år",other:"cirka {{count}} år"},xYears:{one:"1 år",other:"{{count}} år"},overXYears:{one:"over 1 år",other:"over {{count}} år"},almostXYears:{one:"næsten 1 år",other:"næsten {{count}} år"}};function r(e,t,a){var r;return a=a||{},r="string"===typeof n[e]?n[e]:1===t?n[e].one:n[e].other.replace("{{count}}",t),a.addSuffix?a.comparison>0?"om "+r:r+" siden":r}e.exports=t.default},eeea:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=u(a("e954")),r=u(a("bc2f")),i=u(a("f9eb")),d=u(a("971e")),o=u(a("2c66"));function u(e){return e&&e.__esModule?e:{default:e}}var l={code:"da",formatDistance:n.default,formatLong:r.default,formatRelative:i.default,localize:d.default,match:o.default,options:{weekStartsOn:1,firstWeekContainsDate:4}},f=l;t.default=f,e.exports=t.default},f9eb:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var n={lastWeek:"'sidste' eeee 'kl.' p",yesterday:"'i går kl.' p",today:"'i dag kl.' p",tomorrow:"'i morgen kl.' p",nextWeek:"'på' eeee 'kl.' p",other:"P"};function r(e,t,a,r){return n[e]}e.exports=t.default}}]);
//# sourceMappingURL=df-75.d8f16381.js.map