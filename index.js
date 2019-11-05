#!/usr/bin/env node
var program = require('commander');
var parseremote = require('./parseremote');

program
.arguments('<url>')
.action(function(url) {
  console.log('url: %s', url);
  let result  = parseremote.parseUrl(url)
  console.log(result)
})
.parse(process.argv);
