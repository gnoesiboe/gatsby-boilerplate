import React from 'react';
import { TextBlock, TextRow } from 'react-placeholder/lib/placeholders';

const PlatformOverviewItemPlaceholder: React.FC = () => (
    <>
        <TextRow
            color="#dddddd"
            style={{ width: 120, height: 20, marginBottom: 10 }}
        >
            <p>@todo</p>
        </TextRow>
        <TextBlock
            rows={5}
            color="#dddddd"
            lineSpacing={3}
            style={{ width: '100%', marginBottom: 20 }}
        >
            <p>@todo</p>
        </TextBlock>
    </>
);

export default PlatformOverviewItemPlaceholder;
