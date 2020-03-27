import React from 'react';
import { PlatformDetails } from '../../templates/platformDetailDataProvider';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Link } from 'gatsby';
import SEO from '../primitives/Seo';
import Heading, { TagOptions } from '../primitives/heading/Heading';
import useCreateBackToOverviewPathOnFilterChange from './hooks/useCreateBackToOverviewPathOnFilterChange';

type Props = {
    details: PlatformDetails;
};

const PlatformDetail = ({ details }: Props) => {
    const { backToOverviewPath } = useCreateBackToOverviewPathOnFilterChange();

    return (
        <>
            <SEO title={`${details.title} - Platformen`} />
            <Heading tag={TagOptions.h1} uppercase>
                Platform: {details.title}
            </Heading>
            {documentToReactComponents(details.description.json)}
            <Link to={backToOverviewPath}>Terug naar de overzicht</Link>
        </>
    );
};

export default PlatformDetail;
