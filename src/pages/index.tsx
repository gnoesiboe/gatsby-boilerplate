import React from 'react';
import SEO from '../components/primitives/Seo';
import Image from '../components/primitives/Image';
import PlatformOverview from '../components/platformOverview/PlatformOverview';

const Home = () => (
    <>
        <SEO title="Home" />
        <h1>Hallo allemaal</h1>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
            <Image />
        </div>
        <PlatformOverview />
    </>
);

export default Home;
