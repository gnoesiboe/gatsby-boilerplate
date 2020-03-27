import { createHomePathWithFilters } from './../../../routing/urlGenerator';
import { OnPageChangeCallback } from '../../../components/primitives/Pagination';
import { extractNumericQueryParamFromLocation } from '../../../utility/queryStringUtilities';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from '@reach/router';

export default function useManageCurrentPageState() {
    const location = useLocation();
    const navigate = useNavigate();

    const currentPageFromLocation = extractNumericQueryParamFromLocation(
        location,
        'page'
    );

    const [currentPageState, setCurrentPageState] = useState<number>(
        currentPageFromLocation || 1
    );

    // update state if url changes. State is always leading, so most of the times, the page query param
    // will be updated after state update. However, when the visitor uses back and forward buttons in the browser
    // we need to do this manually..
    useEffect(() => {
        if (currentPageFromLocation) {
            setCurrentPageState(currentPageFromLocation);
        }
    }, [currentPageFromLocation]);

    const setCurrentPage = (page: number) => {
        setCurrentPageState(page);

        navigate(createHomePathWithFilters(page));
    };

    const onPageChange: OnPageChangeCallback = (newPage) =>
        setCurrentPage(newPage);

    return { onPageChange, currentPage: currentPageState };
}
