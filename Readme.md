
1. Setup the latest webpack
https://webpack.js.org/guides/getting-started/#basic-setup
add the following in package.json:
"build": "webpack",

2. Setup dev server command:

npm install webpack-dev-server --save-dev

Put the following in package.json:

"start:dev":"webpack-dev-server --hot"

Add configuration in webpack.config.js so that the dev server use the dist files:

devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  }



3. Command to install babel:
npm install babel-core babel-loader babel-preset-env babel-preset-react babel-preset-stage-2 react react-dom --save



4. Install react router.
 npm install react-router react-router-dom


5. Merge webpack config
npm install webpack-merge


7. If you would like to use server.js, you have to install express
npm install express webpack-node-externals --save

Then put the following in package.json -> scripts.
"dev:server": "node build/serverbundle.js",
"dev:build-server": "webpack --config webpack.server.js"

Then use command 'npm run dev:build-server' to build the server.js.

Then use command 'npm run dev:server' to run the server.

8.







