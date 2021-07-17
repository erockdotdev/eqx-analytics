const { compareKeys } = require("../utilities/index.js");
const { PAGE_DATA, USER_DATA } = require("../utilities/defaults.js");

const checkIfValidPageObject = (pageData) => {
  return compareKeys(pageData, PAGE_DATA);
};

const checkIfValidUserObject = (userData) => {
  return compareKeys(userData, USER_DATA);
};

module.exports = {
  checkIfValidUserObject,
  checkIfValidPageObject,
};
