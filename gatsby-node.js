/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path');
const { get } = require('lodash');

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    ['nl', 'en'].forEach((locale) => {
        createPage({
            path: `/${locale}/platformen`,
            component: path.resolve(
                `./src/dynamicPages/platformOverviewDataProvider.tsx`
            ),
            context: {
                locale,
            },
        });
    });

    const platformDetailPages = await graphql(`
        query MyQuery {
            allContentfulPlatform {
                edges {
                    node {
                        slug
                        node_locale
                    }
                }
            }
        }
    `);

    const platforms = get(
        platformDetailPages,
        'data.allContentfulPlatform.edges',
        []
    );

    platforms.forEach((platform) => {
        const locale = get(platform, 'node.node_locale', 'nl');
        const slug = get(platform, 'node.slug', '');

        createPage({
            path: `/${locale}/platformen/${slug}`,
            component: path.resolve(
                './src/dynamicPages/platformDetailDataProvider.tsx'
            ),
            context: {
                locale,
                slug,
            },
        });
    });
};
