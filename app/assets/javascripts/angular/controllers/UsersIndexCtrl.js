rails_angular.controller('UsersIndexCtrl', [
  '$scope', '$http', '$route', function($scope, $http, $route) {
    $scope.users = [];
    $http.get('/users.json').success(function(data) {
      $scope.users = data;
    });

    $scope.delete = function(id) {
      if (confirm('Are you sure you want to delete this?')) {
        $http.delete('/users/' + id).
        then(function(response) {
          $route.reload();
        }, function(response) {
          console.log(response);
          alert(response.status + ": " + response.data.msg);
        });
      }
    };
  }
]);
