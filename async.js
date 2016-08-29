'use strict'

const fs = require('fs')
const fileName = './file'

var buf = fs.readFile(fileName, (err, data) => {
  data.toString();
});

