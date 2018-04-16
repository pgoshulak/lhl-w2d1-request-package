var request = require('request');
var fs = require('fs');

var url = 'https://sytantris.github.io/http-examples/future.jpg'
var output = './future.jpg'

request.get(url)
  .on('error', function(err) {
    console.log(err)
  })
  .on('data', function(chunk) {
    console.log(`Downloading chunk, length = ${chunk.length}`)
  })
  .on('response', function(res) {
    console.log(`Status code: ${res.statusCode}`)
    console.log(`Status message: ${res.statusMessage}`)
    console.log(`Content type: ${res.headers['content-type']}`)
  })
  .on('end', function() {
    console.log('Finished reading data stream')
  })
  .pipe(fs.createWriteStream(output))
    .on('finish', function() {
      console.log('Finished writing data')
    })