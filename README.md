# phaser [![NPM version](https://badge.fury.io/js/phaser.png)](http://badge.fury.io/js/phaser)

> The most deadly markdown documentation generator in the Alpha Quadrant.

## Overview

### Ease of Use

Phaser loves users, so its number one priorty is ease-of use. For new users **zero configuration** is required to get started. Once Phaser is installed, simply enter `phaser` in command line, and you're off and running.

For more experienced users, Phaser offers _more than 50 template tags and filters, includes and partial caching, comment parsing, YAML Front Matter (or Coffee Front Matter!), plugins, mixins, tons of helpful JavaScript and Node.js utilites_, and lots more.

### API

Phaser also loves developers, offering an extensive API and tools for building plugins or extending Phaser in other ways.

### Feature Highlights

* Lo-Dash templates and mixins
* The full power of JavaScript
* Filters
* Tags
* Partial Caching
* Mixins
* Templates can be used directly, cached as JavaScript, and/or via `require` statements
* Uses [gray-matter][] to support both YAML Front Matter and Coffee Front Matter
* Easily add a **Table of Contents** to any file
* Generate a **multi-file Table of Contents**, along with relative links to each file AND section
* Comment parsing (basic)
* Extensive API
* File-system Utilities
* Logging
* Lots more!

### How does Phaser differ from Assemble?

Phaser was specifically created to make it easier to manage documentation for GitHub projects. In a nutshell:

* Use [Assemble][] to build components, sites, blogs and other projects where HTML is the end result.
* Use Phaser to generate and maintain markdown documentation for your [Assemble][] (or non-Assemble) projects.

#### Comparison

While both engines can be extended to accomplish most of the following features, this table describes what you should expect from each _out-of-the-box_:

**Feature** | **[Assemble][]** | **Phaser**
------- | -------- | ------
**Summary** | Build HTML projects from modular components and data | Generate markdown documentation
**Focus** | Power, granular access to context, components | Speed, ease-of-use, command-line
**Template Engine** | Handlebars by default, any template engine can be added. | Lo-Dash
**Extensions** | Plugins, Lo-Dash Mixins, Helpers, Filters, Tags <sup>[1](#1-depends-on-the-template-engine)</sup> | Plugins, Lo-Dash Mixins, Filters, Tags
**Static Blogs** | Yes | No
**Static Sites** | Yes | No
**HTML Documentation** | Yes | Limited.
**Markdown Documentation** | Limited | Yes
**Markdown to HTML** | Yes | Limited

###### <sup>1</sup> Depends on the template engine.

[Assemble]: https://github.com/assemble/assemble
[gray-matter]: https://github.com/assemble/gray-matter


## Authors

**Jon Schlinkert**

+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

**Brian Woodward**

+ [github/doowb](https://github.com/doowb)
+ [twitter/doowb](http://twitter.com/jonschlinkert)

## License
Copyright (c) 2014 Jon Schlinkert, Brian Woodward, contributors.
Released under the MIT license

***

_This file was generated by [phaser](https://github.com/assemble/phaser) on Sunday, February 16, 2014._