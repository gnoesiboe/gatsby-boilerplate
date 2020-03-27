import { PaginatedCollection } from './../types';

export function createEmpty<T>(): PaginatedCollection<T> {
    return {
        items: [],
        noOfResultsPerPage: 0,
        startIndex: 0,
        totalNoOfResults: 0,
    };
}
