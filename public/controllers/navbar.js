/**
 * Created by hamishdickson on 16/08/2014.
 */
(function () {
    var app = angular.module('navbar-directive', []);
    app.directive('navbar', function () {
        return {
            restrict: 'E',
            templateUrl: '../views/navbar.html'
        };
    });
})();