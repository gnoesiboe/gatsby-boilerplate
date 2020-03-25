import { Locale } from '../model/types';
export const homePath = '/';

// BEWARE! Keep inline with url generation in gatsby-node.js
export const createPlatformOverviewPath = (locale: Locale) =>
    `/${locale}/platformen`;

// BEWARE! Keep inline with url generation in gatsby-node.js
export const createPlatformDetailPath = (locale: Locale, slug: string) =>
    `/${locale}/platformen/${slug}`;
