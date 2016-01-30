var myApp = angular.module('myApp', ['ngRoute', 'ngResource']);
    myApp.config(function($routeProvider, $locationProvider){
        $routeProvider
        .when('/home', {
            templateUrl:'views/home/home.html',
            controller: 'homeCtrl'
        })
        .when('/about', {
            templateUrl:'views/about/about.html',
            controller: 'aboutCtrl'
        })
        .when('/portfolio', {
            templateUrl:'views/portfolio/portfolio.html',
            controller: 'portfolioCtrl'
        })
        .when('/contact', {
            templateUrl:'views/contact/contact.html',
            controller: 'contactCtrl'
        })
        .otherwise({
            redirectTo: '/home'
        });  
    });