const Console = require("dead-simple-console-colors");
const { parseValue } = require("./browser-storage-utilities");
const { STORAGE_TYPE, ERROR } = require("../utilities/constants.js");

/**
 * If there is no browser storage (rendering first on server side)
 * return null functions to avoid errors on FE.
 * Also set a try/catch to log errors once storage is available
 */
const useBrowserStorage = (hasSupport) => {
  if (!hasSupport) {
    Console.error(ERROR.NO_BROWSER_STORAGE);
    return {
      getItem: () => null,
      setItem: () => null,
      removeItem: () => null,
    };
  }
  try {
    const storage = window[STORAGE_TYPE];
    function getItem(key) {
      const value = storage.getItem(key);
      if (value) {
        return parseValue(value);
      }
      throw ERROR.UNABLE_TO_RETRIEVE_ITEM;
    }
    function setItem(key, value) {
      storage.setItem(key, JSON.stringify(value));
    }
    function removeItem(key) {
      storage.removeItem(key);
    }
    return {
      getItem,
      setItem,
      removeItem,
    };
  } catch (error) {
    console.log("Error:", JSON.stringify(error));
  }
};

module.exports = useBrowserStorage;
