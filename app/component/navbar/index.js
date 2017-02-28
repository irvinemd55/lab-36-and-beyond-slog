'use strict';

require('angular').module('blogApp')
.component('navbar', {
  template: require('./navbar.html'),
  bindings: {
    pages: '<',
    handleSelect: '<',
  },
});
