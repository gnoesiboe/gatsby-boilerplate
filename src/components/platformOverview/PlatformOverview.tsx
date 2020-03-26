import React from 'react';
import { PlatformOverviewItem } from '../../pages/index';
import { Link } from 'gatsby';
import { createPlatformDetailPath } from '../../routing/urlGenerator';

type Props = {
    items: PlatformOverviewItem[];
};

const PlatformOverview = ({ items }: Props) => (
    <ul>
        {items.map(({ id, slug, title }) => (
            <li key={id}>
                <Link to={createPlatformDetailPath(slug)}>{title}</Link>
            </li>
        ))}
    </ul>
);

export default PlatformOverview;
