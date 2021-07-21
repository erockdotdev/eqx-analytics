const useBrowserStorage = require("../browserStorage/index.js");
const {
  ANALYTICS_DATA_KEYS,
  ERROR: { UNABLE_TO_SET_ITEM },
} = require("../utilities/constants");
const { hasLocalStorageSupport, timestamp } = require("../utilities/index.js");
const {
  checkIfValidPageObject,
  checkIfValidUserObject,
} = require("./controller-utilities.js");

const hasSupport = hasLocalStorageSupport();
const browserStorage = useBrowserStorage(hasSupport);

/**
 * Page Data Functions
 */
const getPageData = () => {
  const pageData = browserStorage.getItem(ANALYTICS_DATA_KEYS.pageData);
  return pageData;
};

const setPageData = (pageData) => {
  const isValidObject = checkIfValidPageObject(pageData);
  if (!isValidObject) {
    return UNABLE_TO_SET_ITEM;
  }
  browserStorage.setItem(ANALYTICS_DATA_KEYS.pageData, pageData);
  return getPageData();
};

const removePageData = () => {
  browserStorage.removeItem(ANALYTICS_DATA_KEYS.pageData);
  return getPageData();
};

/**
 * User Data Functions
 */
const getUserData = () => {
  const retrievedItem = browserStorage.getItem(ANALYTICS_DATA_KEYS.userData);
  return retrievedItem;
};

const setUserData = (userData) => {
  const isValidObject = checkIfValidUserObject(userData);
  if (!isValidObject) return UNABLE_TO_SET_ITEM ;
  browserStorage.setItem(ANALYTICS_DATA_KEYS.userData, userData);
  return getUserData();
};

const removeUserData = () => {
  browserStorage.removeItem(ANALYTICS_DATA_KEYS.userData);
  return getUserData();
};

/**
 * Event Data Functions
 */
const getEventData = () => {
  const userData = browserStorage.getItem(ANALYTICS_DATA_KEYS.userData);
  const pageData = browserStorage.getItem(ANALYTICS_DATA_KEYS.pageData);
  const retrievedItem = browserStorage.getItem(ANALYTICS_DATA_KEYS.eventData);
  return { ...userData, ...pageData, ...retrievedItem };
};

const setEventData = (eventData) => {
  const item = { ...eventData, timestamp };
  browserStorage.setItem(ANALYTICS_DATA_KEYS.eventData, item);
  return getEventData();
};

const removeEventData = () => {
  browserStorage.removeItem(ANALYTICS_DATA_KEYS.eventData);
  return getEventData();
};

/**
 * event - get pageData appData, userData, return with event data
 */

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

const test = {}

module.exports = useAnalytics;
