import React from 'react';

import Layout from '../primitives/Layout';
import SEO from '../primitives/Seo';

const PageNotFound = () => (
    <Layout>
        <SEO title="404: Not found" />
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
);

export default PageNotFound;
