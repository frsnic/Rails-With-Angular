rails_angular.controller('UserNewCtrl', [
  '$scope', '$location', '$http', function($scope, $location, $http) {
    $scope.user = {};

    $scope.reset = function() {
      $scope.user = {};
    };
  }
]);
