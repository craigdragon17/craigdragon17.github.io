import angular from 'angular';

angular.module('about', ['$scope', '$location'])
.controller('aboutCtrl', 
($scope, $location) => {
    $scope.about = "";
    
});