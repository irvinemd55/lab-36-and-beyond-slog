'use strict';

const angular = require('angular');
const uiRouter = require('angular-ui-router');
angular.module('blogApp', [uiRouter])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.when('', './layout');

  let routes = [
    {
      name: 'layout',
      url: '/layout',
      template: '<layout> <layout>',
    },
    {
      name: 'admin',
      url: '/admin',
      template: '<admin> </admin>',
    },
    {
      name: 'dashboard',
      url: '/dashboard',
      template: '<h1> the dashboard </h1>',
    }
  ];
  routes.forEach(route => $stateProvider.state(route));
}]);

require('./service/admin-service.js');

require('./container/admin');

require('./component/login');
require('./component/layout');
