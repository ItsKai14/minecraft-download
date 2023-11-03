angular.module('myApp', [])
.controller('myCtrl', function ($scope) {
  $scope.clickCount = localStorage.getItem('clickCount') || 0;

  $scope.incrementClickCount = function () {
    $scope.clickCount++;
    localStorage.setItem('clickCount', $scope.clickCount);
  };
});
