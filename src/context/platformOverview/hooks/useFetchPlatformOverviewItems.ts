import { PlatformOverviewItemCollection } from './../../../model/types';
import { fetchAll as fetchAllPlatforms } from '../../../contentful/repository/platformRepository';
import { useState, useEffect } from 'react';
import { createEmpty as createEmptyCollection } from '../../../model/factory/paginatedCollectionFactory';

const noOfResultsPerPage = 1;

export default function useFetchPlatformOverviewItems(currentPage: number) {
    const [collection, setCollection] = useState<
        PlatformOverviewItemCollection
    >(createEmptyCollection());

    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        setIsLoading(true);

        const skip = (currentPage - 1) * noOfResultsPerPage;

        fetchAllPlatforms(skip, noOfResultsPerPage)
            .then((collection) => setCollection(collection))
            .catch((error) => {
                // @todo notify user
                // @todo log error to logging service

                console.error('error', error);
            })
            .finally(() => setIsLoading(false));
    }, [currentPage]);

    return { collection, isLoading, currentPage };
}
