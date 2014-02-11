/**
 * phaser <https://github.com/jonschlinkert/phaser>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

var phaser = require('../');

phaser.copy('docs/README.tmpl.md', 'test/actual/FOO.md', {verbose: false});