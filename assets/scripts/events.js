'use strict';

const onGetBooks = function (event) {
  event.preventDefault();
  api.getBooks(data)
    .done(ui.success)
    .fail(ui.failure);
};




module.exports = {
  onGetBooks,
  addHandlers,
};
