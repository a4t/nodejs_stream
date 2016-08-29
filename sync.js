"use strict"

const fs = require('fs')
const fileName = './file'

var data = fs.readFileSync(fileName)
data.toString();
