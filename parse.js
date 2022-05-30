const ndjson = require('ndjson');
let fs = require('fs');

fs.createReadStream('data.txt')
  .pipe(ndjson.parse())
  .on('data', function(obj) {
    // obj is a javascript object
    console.log(obj)
  });
