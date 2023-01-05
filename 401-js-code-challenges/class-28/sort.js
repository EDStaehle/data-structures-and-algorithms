'use strict';

function sortYear(movies) {
  return movies.sort((a, b) => a.year > b.year ? -1 : 1);
}
function sortTitle(movies) {
  return movies.sort((a, b) => {
    const a_Title = a.title.toLowerCase().replace(/^the /, "");
    const b_Title = b.title.toLowerCase().replace(/^the /, "");

    if (a_Title < b_Title) {
      return -1;
    } else if (a_Title > b_Title) {
      return 1;
    } else {
      return 0;
    }
  });
}
function compareYear(movies) {
  return movies.sort((a, b) => {
    if (a.year < b.year) {
      return -1;
    } else if (a.year > b.year) {
      return 1;
    } else {
      return 0;
    }
  })
}


module.exports = { sortYear, sortTitle, compareYear }
