import React from 'react';
import { PlatformDetails } from '../../dynamicPages/platformDetailDataProvider';
import { Locale } from '../../model/types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { createPlatformOverviewPath } from '../../routing/urlGenerator';
import { Link } from 'gatsby';
import SEO from '../primitives/Seo';
import Layout from '../primitives/Layout';

type Props = {
    details: PlatformDetails;
    locale: Locale;
};

const PlatformDetail = ({ details, locale }: Props) => (
    <Layout>
        <SEO title={`${details.title} - Platformen`} />
        <h1>Platform: {details.title}</h1>
        {documentToReactComponents(details.description.json)}
        <Link to={createPlatformOverviewPath(locale)}>
            Terug naar de overzicht
        </Link>
    </Layout>
);

export default PlatformDetail;
