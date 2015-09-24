var rails_angular = angular.module('rails_angular', [
  'ngRoute'
]);

rails_angular.config([
  '$routeProvider', function($routeProvider) {  return $routeProvider.
    otherwise({
      templateUrl: '../angular/index.html',
      controller: 'UsersIndexCtrl'
    });
  }
]);

