(function () {
    'use strict';

    angular.module('module', ['ngRoute']);

    angular.module('module')
        .config(appConfig);
    
    appConfig.$inject = ['$routeProvider'];

    function appConfig($routeProvider) {
        $routeProvider.when('/', {
            template: '<my-view></my-view>'
        })
    }
})();