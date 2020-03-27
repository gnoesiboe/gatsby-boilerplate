import { PlatformListResponse } from '../../contentful/cdnApiResponseTypes';
import { PlatformOverviewItemCollection, PlatformOverviewItem } from '../types';

export function createCollectionFromCDNApiResponse(
    response: PlatformListResponse
): PlatformOverviewItemCollection {
    const items = response.items.map<PlatformOverviewItem>((cursorItem) => ({
        id: cursorItem.sys.id,
        title: cursorItem.fields.title,
        slug: cursorItem.fields.slug,
    }));

    return {
        items,
        noOfResultsPerPage: response.limit,
        startIndex: response.skip,
        totalNoOfResults: response.total,
    };
}
