'use strict';

const app = require('./app');

const getBooks = function() {
  return $.ajax({
    method: 'GET',
    url: app.api + '/books',
  });
};

module.exports = {
  getBooks
};
