# How to setup node with es6

## What is this for
* allows use of import vs require('package') for development
* will use the `package.json` scripts

## Quick and Dirty
* clone this repo
* `npm install`
* `npm run develop` - use in development
* `npm run start` - run prod execution


## Example with Fresh Express App
* generic express package may look like something below
* this can't use import statements or the string interpolation

### ES5
```
const express    =  require('express');
const bodyParser =  require('body-parser');

const app   =  express();
const PORT  =  process.env.PORT || 3000;

// settings
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// modules
app.get('/', (req, res) => { res.send('new response') });

// listener
app.listen(PORT, function() {
  console.log('listening on port:',  PORT);
});

```

### ES6
```
// const express    =  require('express');
// const bodyParser =  require('body-parser');

import express    from 'express';       // new
import bodyParser from 'body-parser';   // new

const app   =  express();
const PORT  =  process.env.PORT || 3000;

// settings
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// modules
app.get('/', (req, res) => { res.send('new response') });

// listener
app.listen(PORT, function() {
  // console.log('listening on port:',  PORT);
  console.log(`listening on port: ${PORT}`);    // new
});
```


## Implementation

### Local development
* at the end of the following steps your startup command will be: `npm run develop`
* install the following
  ```
  npm install -save-dev @babel/preset-env @babel/core babel/node nodemon
  ```

* create `.babelrc` in root of project folder and add the following config:
  ```
  {
    "presets": ["@babel/preset-env"]
  }
  ```

* add this command into your `package.json` as a new `script` command
  ```
  "scripts": {
    "develop": "nodemon --exec babel-node index.js"
  },
  ```


### Production
* this step will add more script commands and will create a transpiled codebase in ES5
* install the following
  ```
  npm install -save-dev @babel/cli
  ```
* add the following to your `package.json` as a new `script` commands
  ```
  "scripts": {
    "develop" :  "nodemon --exec babel-node index.js",  // already in scripts
    "build"   :  "babel index.js -d dist",
    "clean"   :  "rm -rf dist",
    "start"   :  "npm run clean && npm run build && node dist/index.js"
  },
  ```

* alternatively if the project grows and you want to work out of a `src` folder (or whatever you want to name it). Adjust the commands as below:
  ```
  "scripts": {
    "build"   :  "babel src -d dist",
    "clean"   :  "rm -rf dist",
    "develop" :  "nodemon --exec babel-node src/index.js",
    "start"   :  "npm run clean && npm run build && node dist/index.js"
  }
  ```

## scripts
* `build` - create a transpiled version of the app
* `clean` - removes old transpiled code, used by `start` script
* `develop` - runs code in development environment (watches for code changes)
* `start` - runs a 'production' version of the code (intended for use in containers)

## Packages
* [nodemon]() - watches for changes
* [@babel/cli]() - for build command


# Resources
[production](https://github.com/babel/example-node-server)
