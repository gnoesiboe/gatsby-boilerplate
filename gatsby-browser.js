/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from 'react';
import { PlatformOverviewContextProvider } from './src/context/platformOverview/platformOverviewContext';
import 'typeface-abril-fatface';
import './src/styles/global.scss';
import 'react-placeholder/lib/reactPlaceholder.css';
import Layout from './src/components/primitives/Layout';

export const wrapPageElement = ({ element }) => {
    // Ensures that all page contents is wrapped in these components. The components below are never unmounted
    return (
        <PlatformOverviewContextProvider>
            <Layout>{element}</Layout>
        </PlatformOverviewContextProvider>
    );
};
