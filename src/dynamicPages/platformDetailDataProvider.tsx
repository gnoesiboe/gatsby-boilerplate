import React from 'react';
import { graphql } from 'gatsby';
import { get } from 'lodash';
import { Locale } from '../model/types';
import { Document } from '@contentful/rich-text-types';
import PlatformDetail from '../components/platformDetail/PlatformDetail';

export type PlatformDetails = {
    id: string;
    title: string;
    slug: string;
    description: {
        json: Document;
    };
};

type Props = {
    data: {
        contentfulPlatform: PlatformDetails;
    };
    pathContext: {
        locale: Locale;
        slug: string;
    };
};

const PlatformDetailDataProvider = ({ data, pathContext }: Props) => {
    const details = get(data, 'contentfulPlatform') as PlatformDetails;

    return <PlatformDetail details={details} locale={pathContext.locale} />;
};

export default PlatformDetailDataProvider;

export const query = graphql`
    query($locale: String!, $slug: String!) {
        contentfulPlatform(slug: { eq: $slug }, node_locale: { eq: $locale }) {
            id
            title
            slug
            description {
                json
            }
        }
    }
`;
