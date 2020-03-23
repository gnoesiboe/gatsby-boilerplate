# gatsby-boilerplate

Development-ready boilerplate for Gatsby development.

## Development

-   Build and service through web server + re-build on file change:

    ```bash
    npm run dev:build:watch
    ```

-   Reformat code in `src` folder:

    ```bash
    npm run prettier:write
    ```

    (or execute a dry-run with `npm run prettier`)

-   Validate typescript types

    ```bash
    npm run typescript:validate
    ```

-   Run tests

    ```bash
    npm run test
    ```

## Production

1. Create a production-ready and optimized build:

    ```bash
    npn run prod:build
    ```

2. Serve the created build on production afterwards:

    ```bash
    npm run prod:serve
    ```
