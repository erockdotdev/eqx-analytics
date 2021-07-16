const useBrowserStorage = require("../browserStorage/index.js");
const { ANALYTICS_DATA_KEYS } = require("../utilities/constants");
const { hasLocalStorageSupport, timestamp } = require("../utilities/index.js");
const {
  checkIfValidPageObject,
  checkIfValidUserObject,
  verifyPageDataAdded,
  verifyUserDataAdded,
  verifyUserDataRemoved,
} = require("./controller-utilities.js");

const hasSupport = hasLocalStorageSupport();
const browserStorage = useBrowserStorage(hasSupport);

/**
 * Page Data Functions
 */
const getPageData = () => {
  const retrievedItem = browserStorage.getItem(ANALYTICS_DATA_KEYS.pageData);
  return retrievedItem;
};

const setPageData = (pageData) => {
  const isValidObject = checkIfValidPageObject(pageData);
  if (!isValidObject) return { ...UNABLE_TO_SET_ITEM_KEY_ERROR, pageData };
  browserStorage.setItem(ANALYTICS_DATA_KEYS.pageData, pageData);
  return verifyPageDataAdded();
};

const removePageData = () => {
  browserStorage.removeItem(ANALYTICS_DATA_KEYS.pageData);
  return verifyPageDataRemoved();
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
  if (!isValidObject) return { ...UNABLE_TO_SET_ITEM_KEY_ERROR, userData };
  browserStorage.setItem(ANALYTICS_DATA_KEYS.userData, userData);
  return verifyUserDataAdded();
};

const removeUserData = () => {
  browserStorage.removeItem(ANALYTICS_DATA_KEYS.userData);
  return verifyUserDataRemoved();
};

/**
 * Event Data Functions
 */
const getEventData = () => {
  const userData = browserStorage.getItem(ANALYTICS_DATA_KEYS.userData);
  const pageData = browserStorage.getItem(ANALYTICS_DATA_KEYS.pageData);
  const retrievedItem = browserStorage.getItem(ANALYTICS_DATA_KEYS.eventData);
  return {...userData,...pageData, ...retrievedItem };
};

const setEventData = (eventData) => {
  console.log("timestamp", timestamp)
  // const isValidObject = checkIfValidUserObject(userData);
  // if (!isValidObject) return { ...UNABLE_TO_SET_ITEM_KEY_ERROR, userData };
  browserStorage.setItem(ANALYTICS_DATA_KEYS.eventData, {...eventData, timestamp} );
  return getEventData()
  // return verifyUserDataAdded();
};

const removeEventData = () => {
  browserStorage.removeItem(ANALYTICS_DATA_KEYS.eventData);
  // return verifyUserDataRemoved();
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
  }
};

module.exports = useAnalytics;
