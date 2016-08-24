'use strict';

const ui=require('./ui');
const api=require('./api');


const onGetBooks = function (event) {

  // debugger;
  event.preventDefault();
  api.getBooks()
    .done(ui.success)
    .fail(ui.failure);
};

const addHandlers = () => {
  $('#get-books').on('click', onGetBooks);
};


module.exports = {
  onGetBooks,
  addHandlers,
};
