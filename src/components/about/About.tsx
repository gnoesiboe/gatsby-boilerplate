import React from 'react';
import { Link } from 'gatsby';

import Layout from '../primitives/Layout';
import SEO from '../primitives/Seo';

const About = () => (
    <Layout>
        <SEO title="Over ons" />
        <h1>Over ons</h1>
        <Link to="/">Terug naar de homepage</Link>
    </Layout>
);

export default About;
