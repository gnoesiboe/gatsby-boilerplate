import React from 'react';
import { graphql } from 'gatsby';
import { Locale } from '../model/types';
import { get } from 'lodash';
import PlatformOverview from '../components/platformOverview/PlatformOverview';

export type PlatformOverviewItem = {
    id: string;
    title: string;
    slug: string;
};

type PlatformOverviewNode = {
    node: PlatformOverviewItem;
};

type Props = {
    data: {
        allContentfulPlatform: {
            edges: PlatformOverviewNode[];
        };
    };
    pathContext: {
        locale: Locale;
    };
};

const PlatformOverviewDataProvider = ({ data, pathContext }: Props) => {
    const items = get(data, 'allContentfulPlatform.edges', []).map(
        ({ node }: PlatformOverviewNode) => node
    ) as PlatformOverviewItem[];

    return <PlatformOverview locale={pathContext.locale} items={items} />;
};

export default PlatformOverviewDataProvider;

// The $locale parameter comes from the routing context. It is added in gatsby-node.js as part of a dynamic route
export const query = graphql`
    query($locale: String!) {
        allContentfulPlatform(filter: { node_locale: { eq: $locale } }) {
            edges {
                node {
                    id
                    title
                    slug
                }
            }
        }
    }
`;
