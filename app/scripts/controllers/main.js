'use strict';

var app = angular.module('chepeGramApp');

app.constant('MONGOLAB_CONFIG',{API_KEY:'aWsZiqBfgIloZwheIQBY9omcZKQPkwpx', DB_NAME:'testabdel'});

app.controller('AppController', function ($scope, Project, $location, project) {
  Project.all(function(projects){
     $scope.projects = projects;
     console.log($scope.projects);
  });
  var changeSuccess = function() {
    $location.path('/');
  };
  
  var changeError = function() {
    throw new Error('Sth went wrong...');
  };
  $scope.project = project;
  $scope.save = function(){
    console.log('click');
    $scope.project.$save(changeSuccess, changeError);
  };
});

