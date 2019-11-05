#!/usr/bin/env node
var program = require('commander');
var parseremote = require('./parseremote');

program
.arguments('<url>')
.action(function(url) {
  console.log('url: %s', url);
})
.parse(process.argv);

let result  = parseremote.parseUrl(url)
console.log(result)
