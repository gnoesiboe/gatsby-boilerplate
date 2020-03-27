import React from 'react';
import Pagination from '../primitives/Pagination';
import { PlatformOverviewItem } from '../../model/types';
import { usePlatformOverviewContext } from '../../context/platformOverview/platformOverviewContext';
import PlatformOverviewItemComponent from './components/PlatformOverviewItem';
import useScrollToLastScrollPositionOnReturnToOverview from './hooks/useScrollToLastScrollPositionOnReturnToOverview';

const PlatformOverview = () => {
    const {
        collection,
        isLoading,
        onPageChange,
        currentPage,
    } = usePlatformOverviewContext();

    useScrollToLastScrollPositionOnReturnToOverview();

    if (isLoading) {
        return <span>Loading..</span>;
    }

    return (
        <>
            <ul>
                {collection.items.map((item) => (
                    <li key={item.id}>
                        <PlatformOverviewItemComponent item={item} />
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
