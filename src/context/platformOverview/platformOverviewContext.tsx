/* eslint-disable @typescript-eslint/no-empty-function */

import React, { createContext, useContext } from 'react';
import { PlatformOverviewItemCollection } from '../../model/types';
import { createEmpty as createEmptyCollection } from '../../model/factory/paginatedCollectionFactory';
import useFetchPlatformOverviewItems from './hooks/useFetchPlatformOverviewItems';
import useManageCurrentPageState from './hooks/useManageCurrentPageState';
import { OnPageChangeCallback } from '../../components/primitives/Pagination';
import useStoreLastScrollPosition, {
    ScrollPosition,
} from './hooks/useStoreLastScrollPosition';

type ContextValue = {
    isLoading: boolean;
    collection: PlatformOverviewItemCollection;
    onPageChange: OnPageChangeCallback;
    currentPage: number;
    lastScrollPositionRef: React.MutableRefObject<ScrollPosition> | null;
    resetLastScrollPosition: () => void;
};

const initialValue: ContextValue = {
    isLoading: false,
    collection: createEmptyCollection(),
    onPageChange: () => {},
    currentPage: 1,
    lastScrollPositionRef: null,
    resetLastScrollPosition: () => {},
};

const PlatformOverviewContext = createContext<ContextValue>(initialValue);

export const PlatformOverviewContextProvider: React.FC<{
    children: JSX.Element;
}> = ({ children }) => {
    const {
        positionRef: lastScrollPositionRef,
        reset: resetLastScrollPosition,
    } = useStoreLastScrollPosition();

    const { onPageChange, currentPage } = useManageCurrentPageState(
        resetLastScrollPosition
    );

    const { collection, isLoading } = useFetchPlatformOverviewItems(
        currentPage
    );

    const value: ContextValue = {
        isLoading,
        collection,
        onPageChange,
        currentPage,
        lastScrollPositionRef,
        resetLastScrollPosition,
    };

    return (
        <PlatformOverviewContext.Provider value={value}>
            {children}
        </PlatformOverviewContext.Provider>
    );
};

// don't directly expose the context, but expose a custom hook that uses the context interally
export const usePlatformOverviewContext = () =>
    useContext(PlatformOverviewContext);
