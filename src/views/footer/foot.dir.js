import angular from 'angular';
import footerTemplate from './foot.html';

angular.module('foot', [])
.directive('foot', () => {
   
    return {
            restrict:'E',
            template: footerTemplate,
            require:'^ngModel'
       };
})