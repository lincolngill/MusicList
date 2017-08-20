# MusicList
Test project for node.js

This is a change!

[https://closebrace.com/tutorials](https://closebrace.com/tutorials)

## 01 - 03 Install
* node and yarn

## 04 Package Control
* Can use npm or yarn
```bash
cd musiclist
yarn init
# Fill in project info
yarn add map-reverse
```
* open `package.json`

## 05 Using node modules

## 06 & 07 Installing and Using MongoDB
Refer: `../node_js/AAA_readme.md`

```bash
mongo
user musiclist
show dbs
db
db.users.insert({ fullName: 'John Smith', email: 'johnsmith@testemail.com' });
db.users.find().pretty();
show collections
help
```

## 08 & 09 Git

## 10 & 11 & 12 & 13 Installing Express
```bash
yarn global add express-generator
express -v ejs -f musiclist
yarn start
# download dependencies
yarn
```

## 14 Cleanup

```bash
yarn global add nodemon
nodemon npm start
# or
nodemon yarn start
```

## 15 Git branching

## 16 Data Modelling
* Install mongoose
```bash
yarn add mongoose
```
* Edit `models/user.js`

```javascript
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String
});

module.exports = mongoose.model('User', User);
```

## 17 Install passport
* Add to `package.json`
```json
"passport": "^0.3.2",
"passport-local": "^1.0.0",
"passport-local-mongoose": "^4.0.0",
```
```bash
yarn
```
* Edit `app.js`
```javascript
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
...
app.use(require('express-session')({
  secret: 'any random string can go here',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
...
// Configure Passport
const User = require('./models/user');
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
```
* Edit `model/user.js`

```javascript
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
-> const passportLocalMongoose = require('passport-local-mongoose');

const User = new Schema({
  username: String,
  password: String,
  firstName: String,
  lastName: String
});

-> User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);
```

## 18 Using Jest to test
* Install jest
```bash
yarn add jest --dev
yarn add supertest --dev
```
* Add user to mongo
```bash
mongo
use musiclist
db.users.deleteMany({});
db.users.insert({"username": "administrator", "password": "changeme", "firstName": "Lincoln", "lastName": "Gill"});
db.users.find().pretty();
```

## 19 Testing with jest
* Refer `routes/api/users.test.js`
* Add script to `package.json`
```javascript
"test": "jest"
```
* Run
```bash
yarn test
```

## 20 Testing api endpt
* Add user model to users api route and include list uri refer `routes/api/users.js`
* Hide password field. Edit `models/user.js`
```javascript
 password: {type: String, select: false},
 ```

* update app.js to use. Then test
```bash
yarn test
```

## 21 Lint in atom
* Install airbnb config
```bash
npm info "eslint-config-airbnb" peerDependencies
yarn add --dev eslint-config-airbnb eslint@^4.3.0 eslint-plugin-jsx-a11y@^5.1.1 eslint-plugin-import@^2.7.0 eslint-plugin-react@^7.1.0
```
* Create `.eslintrc` in project toplevel dir
* Add linter-eslint package to atom. Use default config

## 22 Command line Lint
* Install Lint globally
* Add jest plugin to stop lint compaining about test syntax
```bash
yarn global add  eslint-config-airbnb eslint@^4.3.0 eslint-plugin-jsx-a11y@^5.1.1 eslint-plugin-import@^2.7.0 eslint-plugin-react@^7.1.0
yarn add --dev eslint-plugin-jest
yarn global add eslint-plugin-jest
```
* Add lint script to `package.json`
```bash
"lint": "eslint ."
```
* Return
```bash
yarn lint
```

## 23 Install React
* React - client framework
* Babel - Code translator. converts ES6 code to ES5 (to run in more browsers)
* Webpack - Bundler. Take a bunch of js files and bundle into one.
* Install <br/><br/>**This takes ages. It compiles modules**
```bash
yarn add react react-dom webpack babel-loader babel-core babel-jest babel-preset-react sass-loader node-sass
```

## 24 Setup Webpack
* Install forgotten module
```bash
yarn add babel-preset-es2017
```
* Create `webpack.config.js` (Refer for comments)

## 25 First React Components
* Create `.babelrc` - Rules babel will use when webpack calls it
* Add webpack script to `app.js`
```javascript
"build-dev": "webpack --config webpack.config.js --progress --profile --colors"
```
* Create `src/index.jsx` -  Top level component of our app
   * import render method
   * import our test component from the testcomponent.jsx file

```javascript
import React from 'react';
import { render } from 'react-dom';
import TestComponent from './testcomponent';

render(
  <TestComponent />,
  document.querySelector('#react-app'),
);
```
* Update `.eslintrc` to stop lint complaining about document being undefined
```bash
# env block
"browser": true,
"node": true,
```
* Create `src/testcomponent.jsx`
   * Usually have classes but this simple e.g. only exports a function
   * Function `TestComponent` will be imported by our index.jsx file
   * The default means we can do a simple import statement

```javascript
import React from 'react';

export default function TestComponent() {
  return (
    <div>
      <h1>React Test Component</h1>
    </div>
  );
}
```
* Edit `views/index.ejs`
```html
<!DOCTYPE html>
<html>
  <head>
    <title><%= title %></title>
    <link rel='stylesheet' href='/stylesheets/style.css' />
  </head>
  <body>
    <div id="react-app">Loading &hellip;</div>
  </body>
  <script src="/javascripts/build.js"></script>
</html>
```
* Build
```bash
yarn run build-dev
```
* Test http://pi.local:3000
