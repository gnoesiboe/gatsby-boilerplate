import React from 'react';
import { Link } from 'gatsby';
import { createPlatformDetailPath } from '../../routing/urlGenerator';
import useFetchPlatformOverviewItemsOnPageChange from './hooks/useFetchPlatformOverviewItems';
import Pagination from '../primitives/Pagination';
import useNavigateToNextPageOnPaginationClick from './hooks/useNavigateToNextPageOnPaginationClick';
import { PlatformOverviewItem } from '../../model/types';

const PlatformOverview = () => {
    const { onPageChange } = useNavigateToNextPageOnPaginationClick();

    const {
        collection,
        isLoading,
        currentPage,
    } = useFetchPlatformOverviewItemsOnPageChange();

    if (isLoading) {
        return <span>Loading..</span>;
    }

    return (
        <>
            <ul>
                {collection.items.map(({ id, slug, title }) => (
                    <li key={id}>
                        <Link to={createPlatformDetailPath(slug)}>{title}</Link>
                    </li>
                ))}
            </ul>
            <Pagination<PlatformOverviewItem>
                collection={collection}
                currentPage={currentPage}
                onPageChange={onPageChange}
            />
        </>
    );
};

export default PlatformOverview;
