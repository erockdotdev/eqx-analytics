const useAnalytics = require("./index");
const { PAGE_DATA, USER_DATA_LOGGED_IN, EVENT_DATA } = require("../utilities/mocks");
const {
  ERROR: { UNABLE_TO_RETRIEVE_ITEM, UNABLE_TO_SET_ITEM },
} = require("../utilities/constants");


describe("Manage Page Data", () => {
  const { page } = useAnalytics;
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
  it("Should read Page Data from local storage", () => {
    const storedPageData = page.get();

    expect(PAGE_DATA).toEqual({ ...storedPageData });
  });

  it("Should remove Page Data from local storage", () => {
    try {
      page.remove();
      page.get();
    } catch (e) {
      expect(e.error).toBe(UNABLE_TO_RETRIEVE_ITEM.error);
    }
  });
});

describe("Manage User Data", () => {
  const { user } = useAnalytics;
  beforeAll(() => {
    window.localStorage.clear();
  });

  it("Should add user data to local storage", () => {
    user.set(USER_DATA_LOGGED_IN);
    const storedUserData = user.get();
    expect(USER_DATA_LOGGED_IN).toEqual(storedUserData);
  });
  it("Should fail to add page data to local storage", () => {
    const invalidKey = { imNotInAllowed: "on a user object" };
    const userData = { ...USER_DATA_LOGGED_IN, ...invalidKey };
    const userResponse = user.set(userData);
    expect(userResponse).toBe(UNABLE_TO_SET_ITEM);
  });
  it("Should read User Data from local storage", () => {
    const storedUserData = user.get();

    expect(USER_DATA_LOGGED_IN).toEqual({ ...storedUserData });
  });

  it("Should remove User Data from local storage", () => {
    try {
      user.remove();
      user.get();
    } catch (e) {
      expect(e.error).toBe(UNABLE_TO_RETRIEVE_ITEM.error);
    }
  });
});

describe("Manage Event Data", () => {
  const { page, user, event } = useAnalytics;
  beforeAll(() => {
    window.localStorage.clear();
    page.set(PAGE_DATA);
    user.set(USER_DATA_LOGGED_IN);
  });

  it("Should add Event data to local storage", () => {
    event.set(EVENT_DATA);
    const storedEventData = event.get();

    expect(storedEventData).not.toEqual(null);
  });
  it("Should return composed event data", () => {
    const eventResponse = event.set(EVENT_DATA);
    const storedEventData = event.get();
    const storedUserData = user.get();
    const storedPageData = page.get();

  
    const combineData = {...storedEventData, ...storedUserData, ...storedPageData}

    expect(combineData).toEqual(eventResponse);
  });

  it("Should read Event Data from local storage", () => {
    const storedEventData = event.get();
    expect(storedEventData).toHaveProperty('event_type', 'page_viewed');
  });

  it("Should remove User Data from local storage", () => {
    try {
      event.remove();
      event.get();
    } catch (e) {
      expect(e.error).toBe(UNABLE_TO_RETRIEVE_ITEM.error);
    }
  });
});

