import $ from 'jquery';
import bootstrap from 'bootstrap';
import angular from 'angular';
import ngResource from 'angular-resource';
import ngRoute from 'angular-route';
import navbar from '../navbar/navbar.dir.js';
import footer from '..'
import home from '../home/home.js';
import portfolio from '../portfolio/portfolio.js';
import about from '../about/about.js';
import contact from '../contact/contact.js';
import homeTemplate from '../home/home.html';
import portfolioTemplate from '../portfolio/portfolio.html';
import aboutTemplate from '../about/about.html';
import contactTemplate from '../contact/contact';

var myApp = angular.module('myApp', ['ngRoute', 'ngResource', 'home', 'portfolio', 'about', 'contact']);
    myApp.config(function($routeProvider, $locationProvider){
        $routeProvider
        .when('/home', {
            template: homeTemplate,
            controller: home
        })
        .when('/about', {
            template: aboutTemplate,
            controller: about
        })
        .when('/portfolio', {
            template: portfolioTemplate,
            controller: portfolio
        })
        .when('/contact', {
            template: contactTemplate,
            controller: contact
        })
        .otherwise({
            redirectTo: '/home'
        });  
    });