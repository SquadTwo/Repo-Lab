'use strict';

const app = require('./app');

const index = function() {
  return $.ajax({
    method: 'GET',
    url: app.host + '/books'
  });
};

module.exports = {
  index,
};
