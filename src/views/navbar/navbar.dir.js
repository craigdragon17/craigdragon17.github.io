import angular from 'angular';
import navbarTemplate from './navbar.html';

angular.module('navbar', [])
.directive('navbar', () => {
   
    return {
            restrict:'E',
            template: navbarTemplate,
            require:'^ngModel'
       };
});