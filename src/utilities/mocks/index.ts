import { EventData, PageData, UserData } from '../../types';

export const USER_DATA_LOGGED_IN: UserData = {
    variis_id: 'abc-12345',
    equinox_tracking_id: '54321-def',
    loggedin_status: true,
};

export const USER_DATA_LOGGED_OUT: UserData = {
    variis_id: null,
    equinox_tracking_id: null,
    loggedin_status: false,
};

export const PAGE_DATA: PageData = {
    screen_name: 'content:explore:on-demand',
    screen_category: 'content',
    screen_section: 'explore',
    screen_subsection: 'on-demand',
    screen_detail: 'lorem-ipsum',
};

export const EVENT_DATA: EventData = {
    event_type: 'page_viewed',
    event_time: '1626373254436',
};
