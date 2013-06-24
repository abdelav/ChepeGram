angular.module('chepeGramApp').factory('Project', function ($mongolabResourceHttp) {
    return $mongolabResourceHttp('projects');
});