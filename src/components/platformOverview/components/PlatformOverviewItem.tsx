import React from 'react';
import { PlatformOverviewItem as PlatformOverviewItemModel } from '../../../model/types';
import { Link } from 'gatsby';
import { createPlatformDetailPath } from '../../../routing/urlGenerator';

type Props = {
    item: PlatformOverviewItemModel;
};

const PlatformOverviewItem: React.FC<Props> = ({ item: { slug, title } }) => {
    const path = createPlatformDetailPath(slug);

    return (
        <Link to={path}>
            <h3>{title}</h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Primum
                Theophrasti, Strato, physicum se voluit; Duo Reges: constructio
                interrete. Qui potest igitur habitare in beata vita summi mali
                metus? Ille incendat? Si de re disceptari oportet, nulla mihi
                tecum, Cato, potest esse dissensio. Non quam nostram quidem,
                inquit Pomponius iocans;
            </p>
        </Link>
    );
};

export default PlatformOverviewItem;
