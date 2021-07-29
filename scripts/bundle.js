var fs = require('fs');

var source = "" +
  fs.readFileSync(__dirname+'/../lib/jsonlint.js', 'utf8') +
  "";

console.log(source);

