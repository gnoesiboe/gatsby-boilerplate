import { useLocation } from '@reach/router';
import { PlatformOverviewItemCollection } from './../../../model/types';
import { fetchAll as fetchAllPlatforms } from '../../../contentful/repository/platformRepository';
import { useState, useEffect } from 'react';
import { extractNumericQueryParamFromLocation } from '../../../utility/queryStringUtilities';

const noOfResultsPerPage = 10;

export default function useFetchPlatformOverviewItems() {
    const location = useLocation();

    const currentPage = extractNumericQueryParamFromLocation(
        location,
        'page',
        1
    );

    const [collection, setCollection] = useState<
        PlatformOverviewItemCollection
    >({
        items: [],
        noOfResultsPerPage: 0,
        startIndex: 0,
        totalNoOfResults: 0,
    });

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
