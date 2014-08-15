/**
 * Created by hamishdickson on 15/08/2014.
 */
(function () {
    var app = angular.module('MyApp');

    app.controller('MainCtrl', ['$scope', function ($scope) {
        $scope.page = 1;

        $scope.setPage = function (newValue) {
            $scope.page = newValue;
        };

        $scope.isSet = function (pageName) {
            return $scope.page === pageName;
        }

    }]);
})();