# Evaluate a News Article based on Natural Language Processing

## Description
This app utilizes [MeaningCloud](https://www.meaningcloud.com/) API to analyze the content of the input URL provided.  The API returns factors such as: subjectivity, confidence, irony and agreement based on AI knowledge of assessing news articles.

## Requirements
This project runs on a local server using Node.  An API key is required from here: [MeaningCloud](https://www.meaningcloud.com/).

## Installation
Use Install the required packages (listed in package.json) with the following command:

```
npm install
```

After installation, the production build (generated in the dist folder) is created with webpack using the following commands.

```
npm run build-prod
npm run start
```

Unit test cases by executing the following command:

```
npm run test
```

For developer environments, use the following commands (will utilize the webpack-dev-server):

```
npm run build-dev
node src\server\index.js
```

This will automatically load the page, and "hot-reload" when any HTML, JS or CSS/SASS file is changed.

Note: webpack-dev-server is port 8080, the local server is port 8081.

## Page instructions
Once the server is running, open the web page to the same port as the server, and enter in a valid URL to a news article (cannot be blank).

The page will dynamically return an AI assessment of the news article.

Note: If connectivity is lost after the page loads, offline support is maintained using Google WorkBox.



## Explanation of the devPlugins in package.json:

* "@babel/core": "^7.5.4",  // Babel to translate ES6 JS to Vanilla JS (for older browsers)

* "@babel/preset-env": "^7.5.4",  // is a smart preset that allows you to use the latest JavaScript without needing to micromanage which syntax transforms (and optionally, browser polyfills) are needed by your target environment(s). This both makes your life easier and JavaScript bundles smaller!

* "babel-loader": "^8.0.6",  // This package allows transpiling JavaScript files using Babel and webpack.

* "clean-webpack-plugin": "^3.0.0",   // By default, this plugin will remove all files inside webpack's output.path directory, as well as all unused webpack assets after every successful rebuild.

* "css-loader": "^5.0.0", // The css-loader interprets @import and url() like import/require() and will resolve them.

* "file-loader": "^6.1.1", // The file-loader resolves import/require() on a file into a url and emits the file into the output directory.  Good for images.

* "html-loader": "^1.3.2", // Exports HTML as string. HTML is minimized when the compiler demands.

* "html-webpack-plugin": "^3.2.0",  // Webpack will automatically put the JS file in HTML as <script>

* "jest": "^26.6.1", // Allows unit testing via npm run test.

* "mini-css-extract-plugin": "^1.2.0", // This plugin extracts CSS into separate files. It creates a CSS file per JS file which contains CSS. It supports On-Demand-Loading of CSS and SourceMaps.

* "node-sass": "^4.14.1", // Node-sass is a library that provides binding for Node.js to LibSass, the C version of the popular stylesheet preprocessor, Sass.  It allows you to natively compile .scss files to css at incredible speed and automatically via a connect middleware.

* "optimize-css-assets-webpack-plugin": "^5.0.4", // Will search for CSS assets during the Webpack build and will optimize \ minimize the CSS.

* "sass-loader": "^10.0.4", // Loads a Sass/SCSS file and compiles it to CSS.

* "style-loader": "^2.0.0", // Inject CSS into the DOM.

* "terser-webpack-plugin": "^5.0.1",  // This plugin uses terser to minify JavaScript.

* "webpack-dev-server": "^3.7.2" // Hot reloading, updates immediately, "watching files".

* "workbox-webpack-plugin": "^5.1.4" // Offline functionality - Workbox provides two webpack plugins: one that generates a complete service worker for you and one that generates a list of assets to precache that is injected into a service worker file.