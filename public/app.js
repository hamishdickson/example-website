angular.module('MyApp', ['ngCookies', 'ngResource', 'ngMessages', 'ngRoute', 'mgcrea.ngStrap'])
    .config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
        $locationProvider.html5Mode(true);

        $routeProvider
            .when('/', {
                templateUrl: 'views/home.html',
                controller: 'MainCtrl'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'MainCtrl'
            })
            .when('/contact', {
                templateUrl: 'views/contact.html',
                controller: 'ContactController'
            })
            .when('/blog', {
                templateUrl: 'views/blog-pages.html',
                controller: 'BlogController'
            })
            .when('/lab', {
                templateUrl: 'views/labs.html',
                controller: 'LabController'
            })
            .otherwise({
                redirectTo: '/'
            });
    }]);