'use strict';

angular.module('chepeGramApp', ['mongolabResourceHttp'])
  .config(function ($routeProvider, $httpProvider) {
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $routeProvider
      .when('/', {
        controller: 'AppController',
        templateUrl:'views/main.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
