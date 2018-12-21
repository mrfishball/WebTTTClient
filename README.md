# WebTTTClient

[![Build Status](https://travis-ci.com/mrfishball/WebTTTClient.svg?branch=master)](https://travis-ci.com/mrfishball/WebTTTClient)

A ❌ Tic-Tac-Toe ⭕ client that runs in the web browser.

Development
------------------------------

### Prerequisites

You're going to need:

 - **Node.js/NPM, version 11.1.0 or newer**
 - **Any modern browser, latest stable version**

### Getting Set Up

1. Clone this repository.

```shell
git clone git@github.com:mrfishball/WebTTTClient.git
```
3. `cd WebTTTClient`
4. Install project dependencies

```shell
# run this to install dependencies
npm install
```

followed by

```shell
# run this to start Webpack DevServer with hot reloading
npm run start
```

**Webpack DevServer will watch for changes in source code, re-compile on the fly and refresh the browser, triggered by file save. Eslinter will produce warnings and/or errors accordingly. To override linter rules, modify the `.eslintrc` file in project's root**

### Testing With Karma

1. Run

```shell
# run to start Karma test runner
npm test
```

**Default browser for Karma is set to Chrome. See 'Change Karma Browser' section for detail.
It is recommended to run `npm test` along side `npm run start` during development to avoid having to run tests and refresh browser manually.**

### Building for production

1. Run

```shell
npm build
```

**Compiled files will be in the /dist folder.***

### Change Karma Browser

Karma configuration file - `karma.conf.js`, can be found in the root of the project directory.

For a list of supported browsers and instructions on how to change browser for testing, see the [official documentation](http://karma-runner.github.io/3.0/config/browsers.html).

## Author

Steven Kwok (@mrfishball)

## License

TTT is released under the MIT License. See the LICENSE file for further
details.
