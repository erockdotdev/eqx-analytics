export enum STORAGE_KEYS {
    USER_DATA = 'USER_DATA',
    PAGE_DATA = 'PAGE_DATA',
    EVENT_DATA = 'EVENT_DATA',
}

export enum STORAGE_TYPES {
    LOCAL_STORAGE = 'localStorage',
}

export type StorageItem = {
    item: string | boolean | number | undefined;
};

export type PageData = {
    screen_name: string;
    screen_category: string;
    screen_section?: string;
    screen_subsection?: string;
    screen_detail?: string;
};

export type UserData = {
    variis_id: string;
    equinox_tracking_id: string;
    loggedin_status: boolean;
};
export type EventData = {
    event_type: string;
} & any;

export type StorageFunctions = {
    getItem: (key: string) => StorageItem;
    setItem: (key: string, value: PageData | UserData | EventData) => void;
    removeItem: (key: string) => void;
};
