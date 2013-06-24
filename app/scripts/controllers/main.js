'use strict';

var app = angular.module('chepeGramApp', ['mongolabResourceHttp']);

app.constant('MONGOLAB_CONFIG',{API_KEY:'aWsZiqBfgIloZwheIQBY9omcZKQPkwpx', DB_NAME:'testabdel'});

app.factory('Project', function ($mongolabResourceHttp) {
    return $mongolabResourceHttp('projects');
});

app.controller('AppController', function ($scope, Project) {
  Project.all(function(projects){
     $scope.projects = projects;
     console.log($scope.projects);
  });
});

