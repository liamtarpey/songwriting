(function() {
    'use strict';

    var HeaderController = function() {

        /**
         * On component init
         */
        this.$onInit = function() {
            console.log('header');
        };

        /**
         * Public vars
         */
        var vm = this;
    };

    HeaderController.$inject = [];
    angular.module('app').component('appHeader', function() {
        return {
            templateUrl: './dist/statics/templates/header/header.html',
            controller: HeaderController,
            controllerAs: 'Header'
        }
    });
})();
