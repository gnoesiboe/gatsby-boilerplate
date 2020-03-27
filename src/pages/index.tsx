import React from 'react';
import Layout from '../components/primitives/Layout';
import SEO from '../components/primitives/Seo';
import Image from '../components/primitives/Image';
import PlatformOverview from '../components/platformOverview/PlatformOverview';

const Home = () => (
    <Layout>
        <SEO title="Home" />
        <h1>Hallo allemaal</h1>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
            <Image />
        </div>
        <PlatformOverview />
    </Layout>
);

export default Home;
