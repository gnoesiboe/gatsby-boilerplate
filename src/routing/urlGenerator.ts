import { createQueryString } from '../utility/queryStringUtilities';

export const homePath = '/';

export const createHomePathWithFilters = (page: number) =>
    homePath + createQueryString({ page });

// BEWARE! Keep inline with url generation in gatsby-node.js
export const createPlatformDetailPath = (slug: string) => `/platformen/${slug}`;
