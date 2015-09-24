rails_angular.controller('UserShowCtrl', [
  '$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
    $http.get("/users/" + $routeParams.id + ".json").success(function(data) {
      $scope.user = data;
    });
  }
]);
