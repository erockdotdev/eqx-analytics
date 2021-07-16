const STORAGE_TYPE = "localStorage";

const ANALYTICS_DATA_KEYS = {
  pageData: "PAGE_DATA",
  userData: "USER_DATA",
  eventData: "EVENT_DATA",
};

const ERROR = {
  NO_BROWSER_STORAGE: { error: "Error: No browser storage is available" },
  UNABLE_TO_RETRIEVE_ITEM: { error: "Error: Unable to retrieve item" },
  UNABLE_TO_SET_ITEM_KEY_ERROR: { error: "Error: Unable to set item" },
  UNABLE_TO_SET_ITEM: { error: "Error: Incorrect object keys - please verify structure. Unable to set item" },
};

module.exports = {
    ANALYTICS_DATA_KEYS,
    STORAGE_TYPE,
    ERROR
}
