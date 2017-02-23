'use strict';

require('angular').module('blogApp')
.component('pageEditor', {
  template: require('./page-editor.html'),
  bindings: {
    page: '<',
    handleSubmit: '<',
  },
});
