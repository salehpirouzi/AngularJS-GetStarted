(function() {

    var github = function($http) {

        var getUser = function(username) {
            return $http.get("https://api.github.com/users/" + username)
                .then(function(response) {
                    return response.data;
                });
        };
        
        var getRepos = function(user){
            return $http.get(user.repos_url)
                 .then(function(response){
                     return response.data;
                 });
        };
        
        var getRepo = function(username, reponame){
            return $http.get("https://api.github.com/repos/" + username + "/" + reponame)
                 .then(function(response){
                     return response.data;
                 });
        };
        
        var getIssues = function(repo){
            return $http.get(repo.issues_url.substring(0, repo.issues_url.indexOf("{")))
                 .then(function(response){
                     return response.data;
                 });
        };

        return {
            getUser: getUser,
            getRepos: getRepos,
            getRepo: getRepo,
            getIssues: getIssues
        };

    };

    var module = angular.module("githubViewer");
    module.factory("github", github);

}());