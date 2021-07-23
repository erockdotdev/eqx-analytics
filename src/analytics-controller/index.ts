import useBrowserStorage from '../browser-storage';
import { hasLocalStorageSupport, timestamp } from '../utilities';
import { EventData, PageData, StorageItem, STORAGE_KEYS, UserData } from '../types';

const hasSupport = hasLocalStorageSupport();
const browserStorage = useBrowserStorage(hasSupport);

/**
 * Page Data Functions
 */
const getPageData = (): StorageItem => {
    const pageData = browserStorage.getItem(STORAGE_KEYS.PAGE_DATA);
    return pageData;
};

const setPageData = (pageData: PageData): StorageItem => {
    browserStorage.setItem(STORAGE_KEYS.PAGE_DATA, pageData);
    return getPageData();
};

const removePageData = () => {
    browserStorage.removeItem(STORAGE_KEYS.PAGE_DATA);
    return getPageData();
};

/**
 * User Data Functions
 */
const getUserData = (): StorageItem => {
    const retrievedItem = browserStorage.getItem(STORAGE_KEYS.USER_DATA);
    return retrievedItem;
};

const setUserData = (userData: UserData): StorageItem => {
    browserStorage.setItem(STORAGE_KEYS.USER_DATA, userData);
    return getUserData();
};

const removeUserData = () => {
    browserStorage.removeItem(STORAGE_KEYS.USER_DATA);
    return getUserData();
};

/**
 * Event Data Functions
 */
const getEventData = (): StorageItem => {
    const userData = browserStorage.getItem(STORAGE_KEYS.USER_DATA);
    const pageData = browserStorage.getItem(STORAGE_KEYS.PAGE_DATA);
    const retrievedItem = browserStorage.getItem(STORAGE_KEYS.EVENT_DATA);
    return { ...userData, ...pageData, ...retrievedItem };
};

const setEventData = (eventData: EventData): StorageItem => {
    const item = { ...eventData, timestamp };
    browserStorage.setItem(STORAGE_KEYS.EVENT_DATA, item);
    return getEventData();
};

const removeEventData = () => {
    browserStorage.removeItem(STORAGE_KEYS.EVENT_DATA);
    return getEventData();
};

const useAnalytics = {
    page: {
        get: getPageData,
        set: setPageData,
        remove: removePageData,
    },
    user: {
        get: getUserData,
        set: setUserData,
        remove: removeUserData,
    },
    event: {
        get: getEventData,
        set: setEventData,
        remove: removeEventData,
    },
};

export default useAnalytics;
