import React from 'react';
import { graphql } from 'gatsby';
import { PlatformOverviewQuery } from '../graphql';
import Layout from '../components/primitives/Layout';
import SEO from '../components/primitives/Seo';
import Image from '../components/primitives/Image';
import PlatformOverview from '../components/platformOverview/PlatformOverview';

export type PlatformOverviewItem = {
    id: string;
    title: string;
    slug: string;
};

type Props = {
    data: PlatformOverviewQuery;
};

const Home = ({ data }: Props) => {
    const items = data.allContentfulPlatform.edges.map(
        ({ node }) => node as PlatformOverviewItem
    );

    return (
        <Layout>
            <SEO title="Home" />
            <h1>Hallo allemaal</h1>
            <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
                <Image />
            </div>
            <PlatformOverview items={items} />
        </Layout>
    );
};

export default Home;

export const query = graphql`
    {
        allContentfulPlatform(sort: { fields: title }) {
            edges {
                node {
                    id
                    slug
                    title
                }
            }
        }
    }
`;
