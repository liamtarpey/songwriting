(function() {
    'use strict';

    var SongController = function() {

        /**
         * On component init
         */
        this.$onInit = function() {
            console.log('song controller');
        };

        /**
         * Public vars
         */
        var vm = this;
    };

    SongController.$inject = [];
    angular.module('app').controller('SongController', SongController);
})();
