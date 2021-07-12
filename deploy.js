#!/usr/bin/env node

var ghpages = require('gh-pages');

ghpages.publish('public',
  {
    branch: 'deploy',
    add: true,
  },
  function(err) {});


ghpages.publish('assets',
  {
    add: true,
    dest: 'static',
    branch: 'deploy',
  },
  function(err) {});
