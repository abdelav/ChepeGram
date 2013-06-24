'use strict';

var app = angular.module('chepeGramApp');

app.constant('MONGOLAB_CONFIG',{API_KEY:'aWsZiqBfgIloZwheIQBY9omcZKQPkwpx', DB_NAME:'testabdel'});

app.controller('AppController', function ($scope, Project) {
  Project.all(function(projects){
     $scope.projects = projects;
     console.log($scope.projects);
  });
});

