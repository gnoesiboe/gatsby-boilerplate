import React from 'react';
import { graphql } from 'gatsby';
import { Document } from '@contentful/rich-text-types';
import PlatformDetail from '../components/platformDetail/PlatformDetail';
import { PlatformDetailQuery } from '../graphql';

export type PlatformDetails = {
    id: string;
    title: string;
    slug: string;
    description: {
        json: Document;
    };
};

type Props = {
    data: PlatformDetailQuery;
};

const PlatformDetailDataProvider = ({ data }: Props) => {
    const details = data.contentfulPlatform as PlatformDetails;

    return <PlatformDetail details={details} />;
};

export default PlatformDetailDataProvider;

// The $locale and $slug parameters come from the routing context. It is added in gatsby-node.js as part of a dynamic route
export const query = graphql`
    query PlatformDetail($slug: String!) {
        contentfulPlatform(slug: { eq: $slug }) {
            id
            title
            slug
            description {
                json
            }
        }
    }
`;
