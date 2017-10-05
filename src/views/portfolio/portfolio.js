import angular from 'angular';

angular.module('portfolio', [])
.controller('portfolioCtrl',
function($scope, $location){
    $scope.working = "Controller Working for Portfolio";
})