var twitterApp = angular.module('twitterApp', ['ngRoute']);

twitterApp.config(function($routeProvider) {
  $routeProvider

  .when('/', {
    templateUrl : 'home.html',
    controller : 'mainController'
  })

  .when('/authorized', {
    templateUrl : 'authorized.html',
    controller : 'authorizedController'
  })
});

twitterApp.controller('mainController', function($scope){
  $scope.message = 'All the tools you need to securely share access to a Twitter account!';
});

twitterApp.controller('authorizedController', function($scope){
  $scope.message = 'Manage who has access from here.';
});
