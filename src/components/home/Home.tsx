import React from 'react';
import { Link } from 'gatsby';
import Layout from '../primitives/Layout';
import SEO from '../primitives/Seo';
import Image from '../primitives/Image';

const Home = () => (
    <Layout>
        <SEO title="Home" />
        <h1>Hallo allemaal</h1>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
            <Image />
        </div>
        <Link to="/over-ons">Over ons</Link>
    </Layout>
);

export default Home;
