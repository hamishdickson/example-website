/**
 * Created by hamishdickson on 15/08/2014.
 */
(function () {
    var app = angular.module('home-directive', []);
    app.directive('homePage', function () {
        return {
            restrict: 'E',
            templateUrl: '../views/home.html'
        };
    });
})();