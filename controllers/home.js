myApp.controller('homeCtrl', ['$scope', '$location',
function($scope, $location){
    $scope.enterPage = function(){
        $location.path('/home');
    };
}]);