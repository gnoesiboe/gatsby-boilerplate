import React from 'react';
import ReactJSPagination from 'react-js-pagination';
import { PaginatedCollection } from '../../model/types';

export type OnPageChangeCallback = (newPage: number) => void;

type Props<T> = {
    collection: PaginatedCollection<T>;
    currentPage: number;
    onPageChange: OnPageChangeCallback;
};

function Pagination<T>({ collection, currentPage, onPageChange }: Props<T>) {
    if (collection.totalNoOfResults < collection.noOfResultsPerPage) {
        return null;
    }

    return (
        <ReactJSPagination
            activePage={currentPage}
            itemsCountPerPage={collection.noOfResultsPerPage}
            totalItemsCount={collection.totalNoOfResults}
            pageRangeDisplayed={5}
            onChange={onPageChange}
            activeLinkClass="is-active"
            linkClassFirst="pagination__first"
            linkClassLast="pagination__last"
            linkClassPrev="pagination__prev icon icon-left"
            linkClassNext="pagination__next icon icon-right"
            prevPageText=""
            nextPageText=""
        />
    );
}

export default Pagination;
