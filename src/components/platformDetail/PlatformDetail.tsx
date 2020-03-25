import React from 'react';
import { PlatformDetails } from '../../dynamicPages/platformDetailDataProvider';
import { Locale } from '../../model/types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { createPlatformOverviewPath } from '../../routing/urlGenerator';
import { Link } from 'gatsby';

type Props = {
    details: PlatformDetails;
    locale: Locale;
};

const PlatformDetail = ({ details, locale }: Props) => (
    <div>
        <h1>{details.title}</h1>
        {documentToReactComponents(details.description.json)}
        <Link to={createPlatformOverviewPath(locale)}>
            Terug naar de overzicht
        </Link>
    </div>
);

export default PlatformDetail;
