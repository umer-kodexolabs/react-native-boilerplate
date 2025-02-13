import {MMKV} from 'react-native-mmkv';

const storage = new MMKV();

/**
 * Stores a key-value pair in MMKV
 * @param key - The storage key
 * @param value - The value to store (string, number, boolean, or object)
 */
const setItem = (key: string, value: any) => {
  if (typeof value === 'object') {
    storage.set(key, JSON.stringify(value));
  } else {
    storage.set(key, value);
  }
};

/**
 * Retrieves a value from MMKV storage
 * @param key - The storage key
 * @returns The parsed value if it's JSON, otherwise the raw value
 */
const getItem = <T>(key: string): T | null => {
  const value = storage.getString(key);
  if (!value) return null;

  try {
    return JSON.parse(value);
  } catch {
    return value as T;
  }
};

/**
 * Removes a key from MMKV storage
 * @param key - The storage key
 */
const removeItem = (key: string) => {
  storage.delete(key);
};

export {storage, setItem, getItem, removeItem};
