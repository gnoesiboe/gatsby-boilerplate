import React, { ReactNode } from 'react';
import { get } from 'lodash';

type Props = {
    children: ReactNode;
};

const PlatformOverviewList = ({ children }: Props) => (
    <ul>
        {React.Children.map(children, (child, index) => {
            const key = get(child, 'key', index);

            return <li key={key}>{child}</li>;
        })}
    </ul>
);

export default PlatformOverviewList;
