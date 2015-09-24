rails_angular.controller('UserNewCtrl', [
  '$scope', '$http', function($scope, $http) {
    $scope.user = {};

    $scope.reset = function() {
      $scope.user = {};
    };

    $scope.update = function() {
      $http.post('/users', $scope.user).
      then(function(response) {
        $scope.response = response.status + ": " + response.statusText;
        console.log(response);
      }, function(response) {
        $scope.response = response.status + ": " + response.data.name.join(", ");
        console.log(response);
      });
    };
  }
]);
