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

### deployment

Make sure you install [`firebase-tools`](https://www.npmjs.com/package/firebase-tools) globally, and, before deploying, login by executing:

```bash
firebase login
```

Afterwards run the command below to deploy the application to Firebase:

```bash
npm run prod:deploy
```

### build and serve locally

1. Create a production-ready and optimized build:

    ```bash
    npn run prod:build
    ```

2. Serve the created build on production afterwards:

    ```bash
    npm run prod:serve
    ```
