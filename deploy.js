#!/usr/bin/env node

var ghpages = require('gh-pages');

ghpages.publish('public',
  {
    branch: 'master',
    add: true,
  },
  function(err) {});


ghpages.publish('assets',
  {
    add: true,
    dest: 'static',
    branch: 'master',
  },
  function(err) {});
