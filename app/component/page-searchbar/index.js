'use strict';

// require('./_page-searchbar.scss'); //TODO work on this later

require('angular').module('blogApp')
.component('pageSearchbar', {
  template: require('./page-searchbar.html'),
  bindings: {
    pages: '<',
    handleSelect: '<',
    searchterm: '<',
  },
});
