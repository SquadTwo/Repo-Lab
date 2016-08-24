'use strict';


// const events=require('./ui');
// handlebars
let displayBooks = function(data){
  console.log(data.books);
  let bookTemplate = require('./templates/books.handlebars');

  // append content from GET request using handlebars
  $('.content').append(bookTemplate({

  // debugger;
  books:data.books
  }));
};



const success = (data) => {

  console.log(data);

  displayBooks(data);


};

module.exports = {
  success,
  displayBooks

};
