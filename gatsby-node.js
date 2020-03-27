/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path');
const { get } = require('lodash');

exports.createPages = async ({ graphql, actions, reporter }) => {
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

    if (platformDetailPages.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`);

        return;
    }

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
                './src/templates/platformDetailDataProvider.tsx'
            ),
            context: { slug },
        });
    });
};
