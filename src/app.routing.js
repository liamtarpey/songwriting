(function() {
    'use strict';

    var Routing = function($routeProvider, $locationProvider) {

        /**
         * Routes
         */
        $routeProvider

            // Home Page
            .when('/', {
                templateUrl: '/dist/statics/templates/song/song.template.html',
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
