'use strict'

const fs = require('fs')

const fileName = './file'
const readStream = fs.createReadStream(fileName);

console.time('first-buffer-timer');
console.time('process-end-timer');

var count = 0;
readStream.on('data', function(data) {
  count++
  if (count == 1) {
    console.timeEnd('first-buffer-timer');
  }
  data.toString();
})

readStream.on('end', function() {
  console.timeEnd('process-end-timer');
});

