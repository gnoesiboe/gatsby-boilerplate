/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path');
const { get } = require('lodash');

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

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
        const slug = get(platform, 'node.slug', '');

        createPage({
            path: `/platformen/${slug}`,
            component: path.resolve(
                './src/dynamicPages/platformDetailDataProvider.tsx'
            ),
            context: { slug },
        });
    });
};
