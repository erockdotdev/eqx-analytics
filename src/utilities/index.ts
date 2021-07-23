export const timestamp = Date.now();

export const hasLocalStorageSupport = (): boolean => {
    try {
        if (typeof window === 'undefined') {
            return false;
        }
        if (typeof localStorage === 'undefined') {
            return false;
        }
    } catch (e) {
        return false;
    }
    return true;
};
