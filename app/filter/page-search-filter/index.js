'use strict';

require('angular').module('blogApp')
.filter('pageSearchFilter', function(){
  return function(pages, searchTerm){
    console.log('pages', pages);
    console.log('searchTerm', searchTerm);
    let fuzzyRegex = generateFuzzyRegex(searchTerm);//TODO double check this
    console.log('fuzzyRegex', fuzzyRegex);

    return pages.filter(page => {
      return fuzzyRegex.test(page.title.toLowerCase());
    });
  };
});
