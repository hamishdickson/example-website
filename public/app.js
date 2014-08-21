angular.module('MyApp', ['ngCookies', 'ngResource', 'ngMessages', 'ngRoute', 'mgcrea.ngStrap', 'main-controller',
        'navbar-directive', 'contact-controller', 'home-directive', 'gist'])
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
                controller: 'MainCtrl'
            })
            .when('/lab', {
                templateUrl: 'views/labs.html',
                controller: 'MainCtrl'
            })
            .when('/tutorials', {
                templateUrl: 'views/tutorials.html',
                controller: 'MainCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    }]);