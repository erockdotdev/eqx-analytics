import { parseValue } from './browser-storage-utilities';
import { ERROR } from '../utilities/constants';
import { StorageFunctions, STORAGE_TYPES } from '../types';

const useBrowserStorage = (hasSupport: boolean): StorageFunctions => {
    if (!hasSupport) {
        throw ERROR.NO_BROWSER_STORAGE;
    }
    try {
        const storage = window[STORAGE_TYPES.LOCAL_STORAGE];
        const getItem = (key: string) => {
            const value: string = storage.getItem(key);
            if (value) {
                return parseValue(value);
            }
            throw ERROR.UNABLE_TO_RETRIEVE_ITEM;
        };
        const setItem = (key: string, value: string) => {
            storage.setItem(key, JSON.stringify(value));
        };
        const removeItem = (key: string) => {
            storage.removeItem(key);
        };
        return {
            getItem,
            setItem,
            removeItem,
        };
    } catch (error) {
        throw JSON.stringify(error);
    }
};

export default useBrowserStorage;
