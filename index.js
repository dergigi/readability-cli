#!/usr/bin/env node
var program = require('commander');

program
.arguments('<url>')
.action(function(url) {
  console.log('url: %s', url);
})
.parse(process.argv);
