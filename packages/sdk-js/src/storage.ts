/*
export type StoredValue = string | number | boolean | Date | StoredObject | StoredArray;

export type StoredArray = StoredValue[];

export type StoredObject = {
	[key: string]: StoredValue | StoredArray;
};
*/

export interface IStorage {
	auth_token: string | null;
	auth_expires: number | null;

	get(key: string): string | null;
	set(key: string, value: string): string;
	delete(key: string): string | null;
}