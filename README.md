Strapit
=======

A CSS framework mashup of Twitter's Bootstrap and ZURB's Foundation.

## Current version: 2.0.3

Basically, this framework retains the styling and semantics of Bootstrap with the Javascript grid, responsivie utilties and Javascript element ideas coming from Foundation. UI elements of Foundation, e.g. subnavs, switches, and flex-video, have been ported over to the Bootstrap styles. Strapit is still written in LESS and retains Bootstrap's mixins, however, we are considering a SASS version and porting the best of each's mixins into both languages for two distinct versions.

There are also some original UI elements and typographic conventions scattered throughout. We expect there will soon be more. We also changed some of the semantics in an attempt to reduce overall code. For example: Rather than append a 'btn-primary' class to a 'btn' class, we simply remove the 'btn-' on the former class, so the styling on an element would read <button class="btn primary block lg"> as opposed to <btn class="btn btn-primary btn-block btn-lg">. Maybe we are wrong to do this. Time will tell.

All deviations are detailed in the docs. In addition, we will be keeping up with the issues and updates of both frameworks and adding them to this framework when applicable.

## Why was this mashup constructed?

We really like Bootstrap and we really like Foundation. We wished we could use the best of both at once, so we took the things we really liked about each and put them together. We prefer Bootstrap's clean, turn-key look and its abundance of UI options to Foundation's rather basic offerings.

However, Foundation is really strong with its additional Javascript offerings. Although we do not anticipate adding the Foundation Javascript library to this framework, we are choosing alternate plugins to that will perform the same functions, such as form validation and progressive image enhancement. We also believe ZURB's experiments and subsequent solutions for things like responsive tables and off-canvas layouts are elegant and worth using.

## Documentation

Strapit's documentation, included in this repo in the root directory, is built with [Jekyll](http://jekyllrb.com) and publicly hosted at [http://sandbox.digitalfirstmedia.com/strapit/](http://sandbox.digitalfirstmedia.com/strapit/). The docs may also be run locally.

### Running documentation locally

1. If necessary, [install Jekyll](http://jekyllrb.com/docs/installation) (requires v1.x).
2. From the root `/strapit` directory, run `jekyll serve` in the command line.
  - **Windows users:** run `chcp 65001` first to change the command prompt's character encoding ([code page](http://en.wikipedia.org/wiki/Windows_code_page)) to UTF-8 so Jekyll runs without errors.
3. Open [http://localhost:9001](http://localhost:9001) in your browser, and voilà.

Learn more about using Jekyll by reading their [documentation](http://jekyllrb.com/docs/home/).

## Compiling CSS and JavaScript

Bootstrap uses [Grunt](http://gruntjs.com/) with convenient methods for working with the framework. It's how we compile our code, run tests, and more. To use it, install the required dependencies as directed and then run some Grunt commands.

### Install Grunt

From the command line:

1. Install `grunt-cli` globally with `npm install -g grunt-cli`.
2. Navigate to the root `/strapit` directory, then run `npm install`. npm will look at [package.json](package.json) and automatically install the necessary local dependencies listed there.

When completed, you'll be able to run the various Grunt commands provided from the command line.

**Unfamiliar with `npm`? Don't have node installed?** That's a-okay. npm stands for [node packaged modules](http://npmjs.org/) and is a way to manage development dependencies through node.js. [Download and install node.js](http://nodejs.org/download/) before proceeding.

### Available Grunt commands

#### Build - `grunt`
Run `grunt` to run tests locally and compile the CSS and JavaScript into `/dist`. **Uses [Less](http://lesscss.org/) and [UglifyJS](http://lisperator.net/uglifyjs/).**

#### Only compile CSS and JavaScript - `grunt dist`
`grunt dist` creates the `/dist` directory with compiled files. **Uses [Less](http://lesscss.org/) and [UglifyJS](http://lisperator.net/uglifyjs/).**

#### Watch - `grunt watch`
This is a convenience method for watching just Less files and automatically building them whenever you save.

### Troubleshooting dependencies

Should you encounter problems with installing dependencies or running Grunt commands, uninstall all previous dependency versions (global and local). Then, rerun `npm install`.


## Contributing

Please read through our [contributing guidelines](https://github.com/dfmlabs/strapit/blob/master/CONTRIBUTING.md). Included are directions for opening issues, coding standards, and notes on development.




