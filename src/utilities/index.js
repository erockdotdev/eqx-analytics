const timestamp = Date.now();

function compareKeys(a, b) {
  var aKeys = Object.keys(a).sort();
  var bKeys = Object.keys(b).sort();
  return JSON.stringify(aKeys) === JSON.stringify(bKeys);
}

function hasLocalStorageSupport() {
  try {
    if (typeof window === "undefined") {
      return false;
    }
    if (typeof localStorage === "undefined") {
      return false;
    }
  } catch (e) {
    return false;
  }
  return true;
}

module.exports = {
  timestamp,
  compareKeys,
  hasLocalStorageSupport
};
