import React from 'react';
import Pagination from '../primitives/Pagination';
import { PlatformOverviewItem } from '../../model/types';
import { usePlatformOverviewContext } from '../../context/platformOverview/platformOverviewContext';
import PlatformOverviewItemComponent from './components/PlatformOverviewItem';
import useScrollToLastScrollPositionOnReturnToOverview from './hooks/useScrollToLastScrollPositionOnReturnToOverview';
import PlatformOverviewList from './components/PlatformOverviewList';
import PlatformOverviewListPlaceholder from './components/PlatformOverviewListPlaceholder';
import PlaceholderWrapper from '../primitives/placeholder/PlaceholderWrapper';

const PlatformOverview = () => {
    const {
        collection,
        isLoading,
        onPageChange,
        currentPage,
    } = usePlatformOverviewContext();

    useScrollToLastScrollPositionOnReturnToOverview();

    return (
        <>
            <PlaceholderWrapper
                ready={!isLoading}
                customPlaceholder={<PlatformOverviewListPlaceholder />}
            >
                <PlatformOverviewList>
                    {collection.items.map((item) => (
                        <PlatformOverviewItemComponent
                            key={item.id}
                            item={item}
                        />
                    ))}
                </PlatformOverviewList>
            </PlaceholderWrapper>
            {!isLoading && (
                <Pagination<PlatformOverviewItem>
                    collection={collection}
                    currentPage={currentPage}
                    onPageChange={onPageChange}
                />
            )}
        </>
    );
};

export default PlatformOverview;
