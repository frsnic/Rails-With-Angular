rails_angular.controller('UserNewCtrl', [
  '$scope', '$location', '$http', function($scope, $location, $http) {
    $scope.user = {};

    $scope.reset = function() {
      $scope.user = {};
    };

    $scope.update = function() {
      $http({
          method: 'POST',
          url: '/users',
          data: $scope.user
      }).
      then(function(response) {
        $scope.response = response.status + ": " + response.statusText;
        console.log(response);
      }, function(response) {
        $scope.response = response.status + ": " + response.statusText;
        console.log(response);
      });
    };

  }
]);
