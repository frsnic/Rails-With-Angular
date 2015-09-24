var rails_angular = angular.module('rails_angular', [
  'ngRoute'
]);

rails_angular.config([
  '$routeProvider', function($routeProvider) {  return $routeProvider.
    when('/users/:id', {
      templateUrl: '../angular/users/show.html',
      controller: 'UserShowCtrl'
    }).
    otherwise({
      templateUrl: '../angular/index.html',
      controller: 'UsersIndexCtrl'
    });
  }
]);

