const USER_DATA_LOGGED_IN = {
  variis_id: "abc-12345",
  equinox_tracking_id: "54321-def",
  loggedin_status: true,
};

const USER_DATA_LOGGED_OUT = {
  variis_id: null,
  equinox_tracking_id: null,
  loggedin_status: false,
};

// @TODO screen_name is page_name in members.equinox.com - which is the standard?
const PAGE_DATA = {
  screen_name: "content:explore:on-demand",
  screen_category: "content",
  screen_section: "explore",
  screen_subsection: "on-demand",
  screen_detail: "lorem-ipsum",
};
// @TODO  find out what time stamp format we should use
const EVENT_DATA = {
  event_type: "page_viewed",
  event_time: "1626373254436",
};

module.exports = {
  USER_DATA_LOGGED_IN,
  USER_DATA_LOGGED_OUT,
  PAGE_DATA,
  EVENT_DATA,
};
