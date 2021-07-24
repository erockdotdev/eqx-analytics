# Equinox Analytics Utilities

## Installation

```
npm install eqx-analytics
```

or

```
yarn eqx-analytics
```

## Usage

import the Equinox Analytics package into the desired component

```
import useAnalytics from "eqx-analytics"
```

We have methods to manage page, user and event data that can be exposed in the following way within a given component.

```
const { page, user, event } = useAnalytics;
```

Each of these above methods have functions to help get, set and remove data saved in local storage.

## Setting Page Data

Call **page.set(pageData)** with the values you would like to set as page data.

Right now we have a strict check that all of the following keys (and only the following) can be set as page data.

```
const PAGE_DATA = {
  screen_name: "content:explore:get-and-set",
  screen_category: "content",
  screen_section: "explore",
  screen_subsection: "get-and-set",
  screen_detail: null,
};
```

To retrieve the page data call:

```
page.get()
```

To delete page data call:

```
page.remove()
```

## Setting User Data

When a user logs in or out, call **user.set(userData)** with the values you would like to set as page data.

Right now we have a strict check that all of the following keys (and only the following) can be set as user data.

```
const USER_DATA = {
    variis_id: "abc-12345",
    equinox_tracking_id: "54321-def",
    loggedin_status: true,
  };
```

To retrieve the page data call:

```
user.get()
```

To delete page data call:

```
user.remove()
```

## Setting & Using Event Data

When a user initiates an event action, call **event.set(userData)** with the values you would like to set as page data.

Right now we have **do not** have a strict check on the values that can be sent here but you should at the least sent `event_type`

Setting and an event returns an object with the composed event, user and page data. For example, the following object will be set for the event:

```
const BTN_CLICKED_DATA = {
  event_type: "btn_clicked",
  label: "Set Event",
};

...

 const setEvent = () => {
    const eventResponse = event.set(BTN_CLICKED_DATA);
    someAnalyticsService(eventResponse);
  };
```

the event response will look something like:

```
{
    equinox_tracking_id: null
    event_type: "btn_clicked"
    label: "Set Event"
    loggedin_status: false
    screen_category: "content"
    screen_detail: "ipsum"
    screen_name: "content:explore:events:ipsum"
    screen_section: "explore"
    screen_subsection: "events"
    timestamp: 1626791087508
    variis_id: null
}
```

To retrieve just the initial event data (this should probably be updated to get the composed data):

```
event.get()
```

To delete page data call:

```
event.remove()
```

Add section of tech used and deploy to npm and git tagging

TS - Definition instructions
https://cameronnokes.com/blog/the-30-second-guide-to-publishing-a-typescript-package-to-npm/

Updating eqx-analytics library
npm install --global np

npm login

https://zellwk.com/blog/publish-to-npm/
https://github.com/sindresorhus/np
