import { EntryCollection } from 'contentful';

export type PlatformListResponseFields = {
    title: string;
    slug: string;
    description: Document;
};

export type PlatformListResponse = EntryCollection<PlatformListResponseFields>;
