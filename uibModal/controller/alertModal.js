angular.module('app').controller('alertModal', ['$scope', 'params', function ($scope, params) {
    var params = params;
    $scope.content = params.content;
    $scope.resolved = function () {
        $scope.$close();
    }
    $scope.rejected = function () {
        $scope.$dismiss();
    }
}])