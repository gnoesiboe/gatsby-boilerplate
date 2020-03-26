/* eslint-disable @typescript-eslint/camelcase */

import {
    PlatformOverviewItem,
    PlatformOverviewItemCollection,
} from './../../model/types';
import { client } from '../client';

type ResponseFields = {
    title: string;
    slug: string;
    description: Document;
};

export async function fetchAll(
    skip: number,
    limit: number
): Promise<PlatformOverviewItemCollection> {
    const data = await client.getEntries<ResponseFields>({
        content_type: 'platform',
        skip,
        limit,
    });

    return {
        items: data.items.map<PlatformOverviewItem>((cursorItem) => ({
            id: cursorItem.sys.id,
            title: cursorItem.fields.title,
            slug: cursorItem.fields.slug,
        })),
        noOfResultsPerPage: data.limit,
        startIndex: data.skip,
        totalNoOfResults: data.total,
    };
}
