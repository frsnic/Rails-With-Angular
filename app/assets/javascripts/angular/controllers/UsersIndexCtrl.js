rails_angular.controller('UsersIndexCtrl', function($scope, $http) {

  $scope.users = [];
  $http.get('./users.json').success(function(data) {
    $scope.users = data;
  });

});
