'use strict';

// handlebars
let displayBooks = function(books){
  // debugger;
  let jobListingTemplate = require('../template/jobs.handlebars');

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

};
