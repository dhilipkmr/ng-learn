// MODULE
var angularApp = angular.module('angularApp', []);

// CONTROLLERS
angularApp.controller('mainController', function ($scope) {
    console.log({$scope});
    $scope.value = 10;
    setTimeout(function() {
        $scope.value = 100;
    }, 5000);

    $scope.$watch('value', function(o, n) {
        console.log({o, n});
        debugger;
    });
    $scope.mulValue = () => Number($scope.value) * 2;

});



