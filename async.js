'use strict'

const fs = require('fs')
const fileName = './file'

console.time('first-buffer-timer');
var buf = fs.readFile(fileName, (err, data) => {
  data.toString();
  console.timeEnd('first-buffer-timer');
});

console.log('async')
