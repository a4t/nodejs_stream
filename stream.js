'use strict'

const fs = require('fs')

const fileName = './file'
const readStream = fs.createReadStream(fileName);

readStream.on('data', function(data) {
  data.toString();
})

readStream.on('end', function() {
});

