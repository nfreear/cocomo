#!/usr/bin/env node

/*!

  © Nick Freear, 03-May-2018.
*/

var path  = require('path');
var fs    = require('fs');
var lib   = path.join(path.dirname(fs.realpathSync(__filename)), '../src');

// require(lib + '/sloc-lib');

var result = require(lib + '/cloc-lib')('~/workspace/cloudworks-copy/*');

console.log(result.header);
console.log(result.warnings);


// End.
