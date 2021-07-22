import Console from "dead-simple-console-colors";
import { parseValue } from "./browser-storage-utilities";
import { STORAGE_TYPE, ERROR} from "../utilities/constants";

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
    const getItem = (key) => {
      const value = storage.getItem(key);
      if (value) {
        return parseValue(value);
      }
      throw ERROR.UNABLE_TO_RETRIEVE_ITEM;
    }
    const setItem = (key, value) => {
      storage.setItem(key, JSON.stringify(value));
    }
    const removeItem = (key) => {
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

export default useBrowserStorage
