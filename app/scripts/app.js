'use strict';

angular.module('chepeGramApp', ['mongolabResourceHttp'])
  .config(function ($routeProvider, $httpProvider) {
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'AppController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
