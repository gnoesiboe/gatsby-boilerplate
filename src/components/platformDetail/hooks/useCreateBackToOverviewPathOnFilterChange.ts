import { createHomePathWithFilters } from '../../../routing/urlGenerator';
import { usePlatformOverviewContext } from '../../../context/platformOverview/platformOverviewContext';
import { useState, useEffect } from 'react';
export default function useCreateBackToOverviewPathOnFilterChange() {
    const { currentPage } = usePlatformOverviewContext();

    const [backToOverviewPath, setBackToOverviewPath] = useState<string>(
        createHomePathWithFilters(currentPage)
    );

    useEffect(() => {
        setBackToOverviewPath(createHomePathWithFilters(currentPage));
    }, [currentPage]);

    return { backToOverviewPath };
}
