#Webpack + Browsersync + Proxy Example

This example project demonstrates using [Webpack](http://webpack.github.io/) and [Browsersync](http://www.browsersync.io/) with an app served by a separate server.

Your external server handles everything as usual - Browsersync merely proxies that server using Webpack's Dev and HMR (Hot Module Replacement) middleware in order to serve assets and handle browser injections and reloads.

This example project is based largely on the [Browsersync - Webpack + Monkey Hot Loader](https://github.com/Browsersync/recipes/tree/master/recipes/webpack.monkey-hot-loader) recipe from Browsersync, as well as the great e-book [SurviveJS - Webpack and React](http://survivejs.com/).

## Installation/Usage:

To try this example, follow these 5 easy steps:

**Step 1**: Clone this repo
```bash
$ git clone https://github.com/shanecav/webpack-browsersync-proxy.git webpack-browsersync-proxy
```

**Step 2**: Move into the directory you cloned to
```bash
$ cd webpack-browsersync-proxy
```

**Step 3**: Install dependencies
```bash
$ npm install
```

**Step 4**: Set up your external server to serve this app. Make sure it serves the `/public` directory.

Go into /app.js and set the `LOCAL_HOST` variable (line 15) to whatever URL your external server is serving the app at.

**Step 5**: Run the example
```bash
$ npm start
```

## Additional Info:

This example project also includes/implements the following:

- [sass-loader](https://github.com/jtangelder/sass-loader)
- [babel-loader](https://github.com/babel/babel-loader)
- [monkey-hot-loader](https://github.com/jlongster/monkey-hot-loader) for hot-replacing regular javascript modules
- [extract-text-webpack-plugin](https://github.com/webpack/extract-text-webpack-plugin) for extracting styles into a separate CSS file outside of the main bundle.js (only when building for production)
- [webpack-merge](https://github.com/survivejs/webpack-merge) for separate webpack configurations based on the `npm` command run

To see `monkey-hot-loader` in action, edit top-level functions (`inc`, `dec`)
inside the `/app/js/counter.js` file.

### Building for production

You can run:
```bash
$ npm run build
```
to build all of the assets for production.
