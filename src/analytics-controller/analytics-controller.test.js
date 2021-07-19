const useAnalytics = require("./index");
const { PAGE_DATA } = require("../utilities/mocks/index.js");
const {
  ERROR: { UNABLE_TO_RETRIEVE_ITEM, UNABLE_TO_SET_ITEM },
} = require("../utilities/constants");

/**
 * @jest-environment jsdom
 */

// page: {
//     get: getPageData,
//     set: setPageData,
//     remove: removePageData,
//   },

describe("ManagePageData", () => {
  const { page, user, event } = useAnalytics;
  beforeAll(() => {
    window.localStorage.clear();
  });

  it("Should add page data to local storage", () => {
    page.set(PAGE_DATA);
    const storedPageData = page.get();
    expect(PAGE_DATA).toEqual(storedPageData);
  });
  it("Should fail to add page data to local storage", () => {
    const invalidKey = { imNotInAllowed: "on a page object" };
    const pageData = { ...PAGE_DATA, ...invalidKey };
    const pageResponse = page.set(pageData);

    expect(pageResponse).toBe(UNABLE_TO_SET_ITEM);
  });
  it("Should read page data to local storage", () => {
    const storedPageData = page.get();
    expect(PAGE_DATA).toEqual({ ...storedPageData });
  });
  it("Should remove page data to local storage", () => {
    page.set(PAGE_DATA);
    try {
        page.remove();
        page.get();
        expect(true).toBe(false);
    } catch (e) {
        expect(e.error).toBe(UNABLE_TO_RETRIEVE_ITEM.error);
    }
  });
});
