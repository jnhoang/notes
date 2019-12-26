# How to setup node with es6

## What is this for
* allows use of import vs require('package') for development
* will use the `package.json` scripts


## Example with Fresh Express App
* generic express package may look like something below
* this can't use import statements or the string interpolation

### Old way
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

### New way
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
* install the following
```
npm install -save @babel/preset-env @babel/core babel/node
```

* create `.babelrc` in root of project folder and add the following config:
```
// .babelrc file

{
  "presets": ["@babel/preset-env"]
}
```
* add this command into your `package.json` as a new script command
```
// command: nodemon --exec babel-node index.js
//b
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "develop": "nodemon --exec babel-node index.js"
},
```


# Resources
[production](https://github.com/babel/example-node-server)
