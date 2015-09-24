var rails_angular = angular.module('rails_angular', [
  'ngRoute', 'ng-rails-csrf'
]);

rails_angular.config([
  '$routeProvider', function($routeProvider) {  return $routeProvider.
    when('/users/new', {
      templateUrl: '../angular/users/new.html',
      controller: 'UserNewCtrl'
    }).
    when('/users/:id/edit', {
      templateUrl: '../angular/users/edit.html',
      controller: 'UserEditCtrl'
    }).
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

