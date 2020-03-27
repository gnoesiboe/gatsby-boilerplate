import React, { createContext, useContext } from 'react';
import { PlatformOverviewItemCollection } from '../../model/types';
import { createEmpty as createEmptyCollection } from '../../model/factory/paginatedCollectionFactory';
import useFetchPlatformOverviewItems from './hooks/useFetchPlatformOverviewItems';
import useManageCurrentPageState from './hooks/useManageCurrentPageState';
import { OnPageChangeCallback } from '../../components/primitives/Pagination';

type ContextValue = {
    isLoading: boolean;
    collection: PlatformOverviewItemCollection;
    onPageChange: OnPageChangeCallback;
    currentPage: number;
};

const initialValue: ContextValue = {
    isLoading: false,
    collection: createEmptyCollection(),
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onPageChange: () => {},
    currentPage: 1,
};

const PlatformOverviewContext = createContext<ContextValue>(initialValue);

export const PlatformOverviewContextProvider: React.FC<{
    children: JSX.Element;
}> = ({ children }) => {
    const { onPageChange, currentPage } = useManageCurrentPageState();

    const { collection, isLoading } = useFetchPlatformOverviewItems(
        currentPage
    );

    const value: ContextValue = {
        isLoading,
        collection,
        onPageChange,
        currentPage,
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
