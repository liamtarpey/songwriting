(function() {
    'use strict';

    var Routing = function($routeProvider, $locationProvider) {

        /**
         * Routes
         */
        $routeProvider

            // Home Page
            .when('/', {
                templateUrl: './dist/statics/template/song/song.html',
                controller: 'SongController',
                controllerAs: 'Song'
            })

            // 404s
            .otherwise({
                redirectTo: '/'
            });

        // HTML5 Mode
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    };

    Routing.$inject = ['$routeProvider', '$locationProvider'];
    angular.module('app').config(Routing);
})();
