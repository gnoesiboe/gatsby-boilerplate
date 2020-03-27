import React from 'react';
import { Link } from 'gatsby';
import { createPlatformDetailPath } from '../../routing/urlGenerator';
import Pagination from '../primitives/Pagination';
import { PlatformOverviewItem } from '../../model/types';
import { usePlatformOverviewContex } from '../../context/platformOverview/platformOverviewContext';

const PlatformOverview = () => {
    const {
        collection,
        isLoading,
        onPageChange,
        currentPage,
    } = usePlatformOverviewContex();

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
