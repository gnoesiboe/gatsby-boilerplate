import React from 'react';
import ReactPlaceholder from 'react-placeholder';
import { Props as PlaceholderProps } from 'react-placeholder/lib/ReactPlaceholder';

const PlaceholderWrapper = ({ children, ...otherProps }: PlaceholderProps) => {
    return <ReactPlaceholder {...otherProps}>{children}</ReactPlaceholder>;
};

export default PlaceholderWrapper;
