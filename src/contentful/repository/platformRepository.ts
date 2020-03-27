import { PlatformListResponseFields } from './../cdnApiResponseTypes.d';
/* eslint-disable @typescript-eslint/camelcase */

import { PlatformOverviewItemCollection } from './../../model/types';
import { client } from '../client';
import { createCollectionFromCDNApiResponse } from '../../model/factory/projectOverviewItemFactory';

export async function fetchAll(
    skip: number,
    limit: number
): Promise<PlatformOverviewItemCollection> {
    const data = await client.getEntries<PlatformListResponseFields>({
        content_type: 'platform',
        skip,
        limit,
    });

    return createCollectionFromCDNApiResponse(data);
}
