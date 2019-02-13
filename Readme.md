
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

8.npm  install npm-run-all rimraf cpx --save.  (npm-run-all One script, built and deploy,rimraf clean wwwroot directory in asp.net core. cpx copy newly built files to wwwroot)

You can paste the script to package.json

In scripts in package.json:

"prod:bundlefordeploy": "webpack --config webpack.client.js",
    "prod:cleanwwwroot": "rimraf ../WebApp/wwwroot",
    "prod:copytowwwroot": "cpx 'public/**/*' ../WebApp/wwwroot",
    "prod:deploy": "npm-run-all --serial prod:bundlefordeploy prod:cleanwwwroot prod:copytowwwroot"



    Apart from this, you need to compress the result bundle.  Search webpack and uglify to learn this.
    So far, copytowwwroot is not working on WIN10.




 ###My personal note 1

1. Install create react app
npm install -g create-react-app

create-react-app reactcra


2. source code of create-react-app on github :
https://github.com/facebook/create-react-app

3. To support saas, add the following to package.json dependencies

 "bootstrap": "4.0.0-alpha.6",
 "font-awesome": "^4.7.0",
 "node-sass-chokidar": "0.0.3"

then run 'npm install' to add those to this project.


Then add the following to scripts of package.json:

"build-css": "node-sass-chokidar --source-comments  --include-path ./src/sass --include-path ./node_modules src/ -o public/"

Then run 'npm run build-css', you are able to get App.css in public folder.


4. 'npm run all' to run a few scripts together.
Add the following to dependencies:
"npm-run-all": "^4.1.1"

Then run 'npm install' to get this in this project.

Replace 2 lines in scripts in package.json:
 "start-js": "react-scripts start",
 "start": "npm-run-all -p watch-css start-js"

 5. How to use existing react to create-react-app project? 
   Tip: it will run public/index.html after it started.
  * First copy existing code files to src/
  * Add dependencies in package.json
   "react-router": "^4.2.0",
   "react-router-dom": "^4.2.2"

 6. Using azure to host your webapp, login to azure, create an webapp
 In development center menu, get FTP details and conncect it, then upload your files in build folder.
 Make sure to run command 'npm run build' and get files.
 Github cannot support routing.


 7. axios to connect http restful api.
 github has resources about this.

 run command to install axios:
 npm install axios


8.Use react redux to manage state.
* Create a redux folder in root folder.
*Create a file in this folder called configureStore.js
*Install node packages：
npm install redux react-redux redux-axios-middleware react-router-redux redux-thunk --save
 Note: reducers do one thing -> receive a incoming state and return a new state.

 Note: incoming request -> actions -> reducers

 * Add action js files and reducers js files in redux/actions and redux/reducers folders.

 * add index.js 








