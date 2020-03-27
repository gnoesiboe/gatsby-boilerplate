import React from 'react';
import PlatformOverviewList from './PlatformOverviewList';
import { range } from 'lodash';
import { noOfResultsPerPage } from '../../../context/platformOverview/hooks/useFetchPlatformOverviewItems';
import PlatformOverviewItemPlaceholder from './PlatformOverviewPlaceholder';

const PlatformOverviewListPlaceholder: React.FC = () => (
    <div>
        <PlatformOverviewList>
            {range(0, noOfResultsPerPage).map((index) => (
                <PlatformOverviewItemPlaceholder key={index} />
            ))}
        </PlatformOverviewList>
    </div>
);

export default PlatformOverviewListPlaceholder;
