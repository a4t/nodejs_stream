"use strict"

const fs = require('fs')
const fileName = './file'

console.time('process-end-timer');
var data = fs.readFileSync(fileName)
data.toString();
console.timeEnd('process-end-timer');
