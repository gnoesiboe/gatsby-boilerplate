import qs from 'qs';
import { WindowLocation } from '@reach/router';

type QueryParams = {
    [key: string]: string | number | QueryParams;
};

const extractQueryParamFromLocation = (
    location: WindowLocation,
    key: string
): string | null => {
    const data = qs.parse(location.search, {
        ignoreQueryPrefix: true,
    });

    return typeof data[key] !== 'undefined' ? data[key] : null;
};

export const extractNumericQueryParamFromLocation = (
    location: WindowLocation,
    key: string,
    defaultValue: number
): number => {
    const value = extractQueryParamFromLocation(location, key);

    return value ? parseInt(value) : defaultValue;
};

export const createQueryString = (params: QueryParams) =>
    qs.stringify(params, {
        addQueryPrefix: true,
    });
