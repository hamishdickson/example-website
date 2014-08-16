/**
 * Created by hamishdickson on 16/08/2014.
 */
(function () {
    var app = angular.module('MyApp');
    app.directive('labsPage', function () {
        return {
            restrict: 'E',
            templateUrl: '../views/labs.html'
        };
    });
})();