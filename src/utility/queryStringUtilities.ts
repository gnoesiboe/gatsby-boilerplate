import qs from 'qs';
import { WindowLocation } from '@reach/router';

type QueryParams = {
    [key: string]: string | number | QueryParams;
};

const extractQueryParamFromLocation = (
    location: WindowLocation | Location,
    key: string
): string | null => {
    const data = qs.parse(location.search, {
        ignoreQueryPrefix: true,
    });

    return typeof data[key] !== 'undefined' ? data[key] : null;
};

export const extractNumericQueryParamFromLocation = (
    location: WindowLocation,
    key: string
): number | null => {
    const value = extractQueryParamFromLocation(location, key);

    return value ? parseInt(value) : null;
};

export const createQueryString = (params: QueryParams) =>
    qs.stringify(params, {
        addQueryPrefix: true,
    });
