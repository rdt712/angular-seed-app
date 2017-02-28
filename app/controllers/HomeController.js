(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('HomeController', HomeController);

    HomeController.$inject = [
        '$state'
    ];

    /* @ngInject */
    function HomeController(
        $state
    ) {
        var homeController = this;

        homeController.name = "User";

        activate();

        ////////////////

        function activate() {}
    }
})();
