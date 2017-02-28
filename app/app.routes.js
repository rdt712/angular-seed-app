(function() {
    'use strict';

    angular
        .module('myApp')
        .config(router);

    router.$inject = [
        '$stateProvider',
        '$urlRouterProvider'
    ];

    /* @ngInject */
    function router(
        $stateProvider,
        $urlRouterProvider
    ) {
        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/pages/home.html',
                controller: 'HomeController',
                controllerAs: 'homeController'
            }).state('page1', {
                url: '/page1',
                templateUrl: 'app/pages/home.html',
                controller: 'HomeController',
                controllerAs: 'homeController'
            }).state('page2', {
                url: '/page2',
                templateUrl: 'app/pages/home.html',
                controller: 'HomeController',
                controllerAs: 'homeController'
            });
    }
})();
