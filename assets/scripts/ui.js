'use strict';


// const events=require('./ui');
// handlebars
let displayBooks = function(books){
  // debugger;
  let jobListingTemplate = require('./templates/books.handlebars');

  // append content from GET request using handlebars
  $('.content').append(jobListingTemplate({

  // debugger;
  books
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
