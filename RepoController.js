(function() {

  var app = angular.module("githubViewer");

  var RepoController = function($scope, github, $routeParams) {
    var onRepoComplete = function(data) {
      $scope.repo = data;
      github.getIssues($scope.repo).then(onIssues, onError);
    };
    
    var onIssues = function(data){
      $scope.issues = data;
    };

    var onError = function(reason) {
      $scope.error = "Could not fetch data.";
    };
    
    $scope.username = $routeParams.username;
    $scope.reponame = $routeParams.reponame;
    github.getRepo($scope.username, $scope.reponame).then(onRepoComplete, onError);
   };

  app.controller("RepoController", RepoController);

}());