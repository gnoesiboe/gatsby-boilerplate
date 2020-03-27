import { createHomePathWithFilters } from '../../../routing/urlGenerator';
import { usePlatformOverviewContex } from '../../../context/platformOverview/platformOverviewContext';
import { useState, useEffect } from 'react';
export default function useCreateBackToOverviewPathOnFilterChange() {
    const { currentPage } = usePlatformOverviewContex();

    const [backToOverviewPath, setBackToOverviewPath] = useState<string>(
        createHomePathWithFilters(currentPage)
    );

    useEffect(() => {
        setBackToOverviewPath(createHomePathWithFilters(currentPage));
    }, [currentPage]);

    return { backToOverviewPath };
}
