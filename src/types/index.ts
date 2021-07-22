export enum STORAGE_KEYS {
    USER_DATA = "USER_DATA",
    APP_DATA = "APP_DATA",
    EVENT_DATA = "EVENT_DATA"
}

export type AnalyticsFunctions = {
        getItem: (key: string)=> object;
        setItem: (key:string, value:string)=> void;
        removeItem: (key:string) => void;
}
 