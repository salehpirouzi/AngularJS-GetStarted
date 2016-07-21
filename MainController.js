(function() {

    var app = angular.module("githubViewer");

    var MainController = function($scope, $interval, $location) {

        var decrementCountdown = function() {
            $scope.countdown -= 1;
            if ($scope.countdown < 1) {
                $scope.search($scope.username);
            }
        };

        var countdownInternal = null;
        var startCountdown = function() {
            countdownInternal = $interval(decrementCountdown, 1000, 5);
        };

        $scope.search = function(username) {
            if (countdownInternal) {
                $interval.cancel(countdownInternal);
                $scope.countdown = null;
            }
            $location.path("/user/" + username);
        };

        $scope.username = "odetocode";
        $scope.countdown = 1;
        startCountdown();
    };

    app.controller("MainController", MainController);

}());