import angular from 'angular';


angular.module('contact', ['$scope'])
.controller('contactCtrl', $scope =>{
      $scope.master = {};

      $scope.update = user => {
        $scope.master = angular.copy(user);
      };

      $scope.reset = () => {
        $scope.user = angular.copy($scope.master);
      };

      $scope.reset();
    })