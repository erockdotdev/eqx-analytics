const {
  ANALYTICS_DATA_KEYS,
  ERROR: { UNABLE_TO_SET_ITEM },
} = require("../utilities/constants");
const { compareKeys } = require("../utilities/index.js");
const { PAGE_DATA, USER_DATA_LOGGED_IN } = require("../mocks/index.js");
const { hasLocalStorageSupport } = require("../utilities/index.js");
const useBrowserStorage = require("../browserStorage/index.js");

const hasSupport = hasLocalStorageSupport();
const browserStorage = useBrowserStorage(hasSupport);

const checkIfValidPageObject = (pageData) => {
  return compareKeys(pageData, PAGE_DATA);
};

const checkIfValidUserObject = (userData) => {
  return compareKeys(userData, USER_DATA_LOGGED_IN);
};
const verifyPageDataAdded = () => {
  const pageDataInStorage = browserStorage.getItem(
    ANALYTICS_DATA_KEYS.pageData
  );
  if (pageDataInStorage)
    return {
      message: `Successfully set ${ANALYTICS_DATA_KEYS.pageData}`,
      pageDataInStorage,
    };
  return UNABLE_TO_SET_ITEM;
};

const verifyUserDataAdded = () => {
  const userDataInStorage = getUserData();
  if (userDataInStorage)
    return {
      message: `Successfully set ${ANALYTICS_DATA_KEYS.userData}`,
      userDataInStorage,
    };
  return UNABLE_TO_SET_ITEM;
};

const verifyUserDataRemoved = () => {
  const retrievedItem = browserStorage.getItem(ANALYTICS_DATA_KEYS.userData);
  if (!retrievedItem)
    return { message: `Successfully removed item` };
  return { message: "Unable to removed ${retrievedItem}" };
};

module.exports = {
  verifyUserDataAdded,
  verifyUserDataRemoved,
  verifyPageDataAdded,
  checkIfValidUserObject,
  checkIfValidPageObject,
};
