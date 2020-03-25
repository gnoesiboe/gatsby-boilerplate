import React from 'react';
import { PlatformOverviewItem } from '../../dynamicPages/platformOverviewDataProvider';
import Layout from '../primitives/Layout';
import SEO from '../primitives/Seo';
import { Link } from 'gatsby';
import { createPlatformDetailPath, homePath } from '../../routing/urlGenerator';
import { Locale } from '../../model/types';

type Props = {
    items: PlatformOverviewItem[];
    locale: Locale;
};

const PlatformOverview = ({ items, locale }: Props) => (
    <Layout>
        <SEO title="Platformen" />
        <h1>Platformen</h1>
        <ul>
            {items.map(({ id, slug, title }) => (
                <li key={id}>
                    <Link to={createPlatformDetailPath(locale, slug)}>
                        {title}
                    </Link>
                </li>
            ))}
        </ul>
        <Link to={homePath}>Terug naar de homepage</Link>
    </Layout>
);

export default PlatformOverview;
