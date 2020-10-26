


Explanation of the devPlugins in package.json:

"@babel/core": "^7.5.4",  // Babel to translate ES6 JS to Vanilla JS (for older browsers)

"@babel/preset-env": "^7.5.4",  // is a smart preset that allows you to use the latest JavaScript without needing to micromanage which syntax transforms (and optionally, browser polyfills) are needed by your target environment(s). This both makes your life easier and JavaScript bundles smaller!

"babel-loader": "^8.0.6",  // This package allows transpiling JavaScript files using Babel and webpack.

"clean-webpack-plugin": "^3.0.0",   // By default, this plugin will remove all files inside webpack's output.path directory, as well as all unused webpack assets after every successful rebuild.

"css-loader": "^5.0.0",

"html-webpack-plugin": "^3.2.0",  // Webpack will automatically put the JS file in HTML as <script>

"mini-css-extract-plugin": "^1.2.0",

"node-sass": "^4.14.1",

"optimize-css-assets-webpack-plugin": "^5.0.4",

"sass-loader": "^10.0.4",

"style-loader": "^2.0.0",

"terser-webpack-plugin": "^5.0.1",

"webpack-dev-server": "^3.7.2" // Hot reloading, updates immediately, "watching files".

