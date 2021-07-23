import { StorageItem } from '../types';

export const parseValue = (input: string): StorageItem => {
    let value;
    try {
        value = JSON.parse(input);
        if (typeof value === 'undefined') {
            value = input;
        }
        if (value === 'true') {
            value = true;
        }
        if (value === 'false') {
            value = false;
        }
        if (parseFloat(value) === value && typeof value !== 'object') {
            value = parseFloat(value);
        }
    } catch (e) {
        value = input;
    }
    return value;
};
