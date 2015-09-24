rails_angular.controller('UserEditCtrl', [
  '$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
    $scope.user = {};
    $http.get("./users/" + $routeParams.id + ".json").success(function(data) {
      $scope.user = data;
    });

    $scope.reset = function() {
      $http.get("./users/" + $routeParams.id + ".json").success(function(data) {
        $scope.user = data;
      });
    };

    $scope.update = function() {
      $http.patch('/users/' + $routeParams.id, $scope.user).
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
