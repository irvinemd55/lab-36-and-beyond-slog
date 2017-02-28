'use strict';

require('angular').module('blogApp')
.filter('navFilter', function(){
  return function(pages) {
    return pages.filter(p => p.showInNav);
  };
});
