import angular from 'angular';

angular.module('home', ['$scope', '$location'])
.controller('homeCtrl', ($scope, $location) => {
    $scope.working = "";
});