# verb [![NPM version](https://badge.fury.io/js/verb.svg)](http://badge.fury.io/js/verb)  [![Build Status](https://travis-ci.org/verbose/verb.svg)](https://travis-ci.org/verbose/verb)

> Documentation generator for GitHub projects. Verb is extremely powerful, easy to use, and is used on hundreds of projects of all sizes to generate everything from API docs to readmes.

**Built by verb**

The follow projects use verb to build the reamde and other docs:

* [micromatch](https://github.com/jonschlinkert/micromatch/) (1.7m downloads/mo) - this readme is pretty extensive, with a TOC and other advanced features
* [is-glob](https://www.npmjs.com/package/is-glob) (1.6m downloads/mo) - example of simple readme
* [repeat-string](https://www.npmjs.com/package/is-glob) (2.2m downloads/mo) - example of another basic readme.

**Quickstart**

Install `verb` and `verb-cli` globally:

```sh
$ npm i verb verb-cli -g
```

Next, just add a `.verb.md` markdown template to your project and run `verb` in the commandline _(**NOTE** that verb will overwrite the existing `README`, so make sure your work is committed!)_.

I'm working on a site for verb, but in the meantime a good place to see `.verb.md` examples is to surf [my projects](https://github.com/jonschlinkert).

## Install

Install with [npm](https://www.npmjs.com/)

```sh
$ npm i verb --save-dev
```

## Usage

```js
var verb = require('verb');
```

## Table of contents

<!-- toc -->

* [Features](#features)
* [CLI](#cli)
* [API](#api)
  - [Template API](#template-api)
  - [Config API](#config-api)
  - [Data API](#data-api)
  - [Middleware API](#middleware-api)
  - [Task API](#task-api)
  - [](#-task--indexjs-l114-)[.task](index.js#L114)
  - [](#-watch--indexjs-l180-)[.watch](index.js#L180)

* [Related projects](#related-projects)
* [Why use Verb?](#why-use-verb-)
* [Running tests](#running-tests)
* [Contributing](#contributing)
* [Troubleshooting](#troubleshooting)
* [Major changes](#major-changes)
* [Author](#author)
* [License](#license)

_(Table of contents generated by [verb])_

<!-- tocstop -->

## Features

* Generate markdown docs, or HTML
* Generate a Table of Contents simply by adding `<!-- toc -->` to any document.
* Include templates from locally installed npm packages with the `{%= include() %}` helper
* Include templates from your project's `docs/` directory with the `{%= docs() %}` helper
* Change the templates directory for either helper by passing a `cwd` to the helper: example: `{%= docs("foo", {cwd: ''}) %}`

## CLI

_(WIP)_

## API

> Verb's API is organized into the following categories:

* [Template API](#template-api)
* [Config API](#config-api)
* [Data API](#data-api)
* [Middleware API](#middleware-api)
* [Task API](#task-api)

### Template API

_(WIP)_

Methods:

* `.create`
* `.loader`
* `.load`
* `.engine`
* `.helper`
* `.helpers`
* `.asyncHelper`
* `.asyncHelpers`
* `.render`

Verb exposes entire API from [template](https://github.com/jonschlinkert/template). See the [template docs] the full API.

### Config API

**Transforms**

Run immediately during init. Used to extend or modify the `this` object.

```js
verb.transform('engine', function() {
  this.engine('md', require('engine-lodash'));
});
```

**Application Settings**

> Set arbitrary values on `verb.cache`:

* `.set`
* `.get`
* `.del`

See the [config-cache docs] the full API.

**Options**

> Set and get values from `verb.options`:

* `.option`
* `.enable`
* `.enabled`
* `.disable`
* `.disabled`
* `.disabled`

See the [option-cache docs] the full API.

_(WIP)_

### Data API

> Set and get values from `verb.cache.data`

* `.data`

Verb exposes entire API from [plasma](https://github.com/jonschlinkert/plasma). See the [plasma docs] the full API.

_(WIP)_

### Middleware API

Verb exposes the entire [en-route] API. See the [en-route docs] the full API.

_(WIP)_

### Task API

### [.task](index.js#L114)

Define a Verb task.

**Params**

* `name` **{String}**: Task name
* `fn` **{Function}**

**Example**

```js
verb.task('docs', function() {
  verb.src(['.verb.md', 'docs/*.md'])
    .pipe(verb.dest('./'));
});
```

### [.watch](index.js#L180)

Re-run the specified task(s) when a file changes.

**Params**

* `glob` **{String|Array}**: Filepaths or glob patterns.
* `fn` **{Function}**: Task(s) to watch.

**Example**

```js
verb.task('watch', function() {
  verb.watch('docs/*.md', ['docs']);
});
```

### [.src](index.js#L60)

Glob patterns or filepaths to source files.

**Params**

* `glob` **{String|Array}**: Glob patterns or file paths to source files.
* `options` **{Object}**: Options or locals to merge into the context and/or pass to `src` plugins

**Example**

```js
verb.src('src/*.hbs', {layout: 'default'})
```

### [.dest](index.js#L76)

Specify a destination for processed files.

**Params**

* `dest` **{String|Function}**: File path or rename function.
* `options` **{Object}**: Options and locals to pass to `dest` plugins

**Example**

```js
verb.dest('dist')
```

### [.copy](index.js#L95)

Copy a `glob` of files to the specified `dest`.

**Params**

* `glob` **{String|Array}**
* `dest` **{String|Function}**
* `returns` **{Stream}**: Stream, to continue processing if necessary.

**Example**

```js
verb.task('assets', function() {
  verb.copy('assets/**', 'dist');
});
```

### [.diff](index.js#L116)

Display a visual representation of the difference between two objects or strings.

**Params**

* `a` **{Object|String}**
* `b` **{Object|String}**
* `methodName` **{String}**: Optionally pass a [jsdiff](https://github.com/nathan7/jsdiff)method name to use. The default is `diffJson`

**Example**

```js
var doc = verb.views.docs['foo.md'];
verb.render(doc, function(err, content) {
  verb.diff(doc.orig, content);
});
```

## Related projects

* [assemble](https://www.npmjs.com/package/assemble): Static site generator for Grunt.js, Yeoman and Node.js. Used by Zurb Foundation, Zurb Ink, H5BP/Effeckt,… [more](https://www.npmjs.com/package/assemble) | [homepage](http://assemble.io)
* [composer](https://www.npmjs.com/package/composer): The build system used to create verb, assemble and generate. | [homepage](https://github.com/jonschlinkert/composer)
* [engine](https://www.npmjs.com/package/engine): Template engine based on Lo-Dash template, but adds features like the ability to register helpers… [more](https://www.npmjs.com/package/engine) | [homepage](https://github.com/jonschlinkert/engine)
* [template](https://www.npmjs.com/package/template): Render templates using any engine. Supports, layouts, pages, partials and custom template types. Use template… [more](https://www.npmjs.com/package/template) | [homepage](https://github.com/jonschlinkert/template)

## Why use Verb?

It's magical and smells like chocolate. If that's not enough for you, it's also the most powerful and easy-to-use documentation generator for node.js. And it's magical.

## Running tests

Install dev dependencies:

```sh
$ npm i -d && npm test
```

## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/verbose/verb/issues/new).

## Troubleshooting

1. First things first, please make sure to run `npm cache clear`, then do `npm i verb verb-cli -g`. If that doesn't clear things up, try #2.
2. Create [an issue](https://github.com/verbose/verb/issues). We'd love to help, so please be sure to provide as much detail as possible, including:

* version of verb and verb-cli
* platform
* any error messages or other information that might be useful.

## Major changes

* `v0.4.0`: Verb now requires [verb-cli](https://github.com/verbose/verb-cli)to run. See the [getting started](#getting-started) section for details.

## Author

**Jon Schlinkert**

+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

## License

Copyright © 2014-2015 [Jon Schlinkert](https://github.com/jonschlinkert)
Released under the MIT license.

***

_This file was generated by [verb-cli](https://github.com/assemble/verb-cli) on August 21, 2015._
