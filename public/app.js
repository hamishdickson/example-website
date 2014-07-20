angular.module('MyApp', ['ngCookies', 'ngResource', 'ngMessages', 'ngRoute', 'mgcrea.ngStrap'])
    .config(function($locationProvider) {
        $locationProvider.html5Mode(true);


    });