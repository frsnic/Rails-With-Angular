rails_angular.controller('UserShowCtrl', [
  '$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
    return $http.get("./users/" + $routeParams.id + ".json").success(function(data) {
      return $scope.user = data;
    });
  }
]);
