(function() {
    'use strict';

    var MetronomeController = function() {

        /**
         * On component init
         */
        this.$onInit = function() {

        };

        /**
         * Public vars
         */
        var vm = this;
    };

    MetronomeController.$inject = [];
    angular.module('app').component('metronome', function() {
        return {
            templateUrl: './dist/templates/metronome/metronome.template.html',
            controller: MetronomeController,
            controllAs: 'Metronome'
        }
    });
})();



// app.controller('metronome',
// 			    ['$scope',
// 				'$interval',
// 				'$timeout',
// 				 function ($scope, $interval, $timeout){
//
//
// 	//==========
// 	// Defaults
// 	//==========
// 	$scope.bars                  = 4;
// 	$scope.beats                 = 4;
// 	$scope.metronomeBtnText      = "Start";
// 	$scope.selectedTimeSignature = "4/4";
// 	$scope.bpm                   = 120;
//
// 	//============
// 	// Audio Files
// 	//============
// 	var highBlip = new Audio('assets/sounds/high_blip.mp3'),
// 		lowBlip  = new Audio('assets/sounds/low_blip.mp3');
//
//
// 	//============
// 	// Scope vars
// 	//============
// 	$scope.run                   = false;
// 	$scope.timeSignatureText     = "4/4";
// 	$scope.showTimeSignatures    = false;
// 	$scope.timeSignatures        = [
//
// 		{ time: "4/4",  beats: "4",  bars: "4" },
// 		{ time: "2/2",  beats: "2",  bars: "2" },
// 		{ time: "3/4",  beats: "3",  bars: "4" },
// 		{ time: "2/4",  beats: "2",  bars: "4" },
// 		{ time: "6/8",  beats: "6",  bars: "8" },
// 		{ time: "12/8", beats: "12", bars: "8" }
// 	];
//
//
// 	//==============================================
// 	// Get time signature and define new scope vars
// 	//==============================================
// 	$scope.getTimeSignature = function(beats, bars, time) {
//
// 		$scope.bars               = bars;
// 		$scope.beats              = beats;
// 		$scope.timeSignatureText  = time;
// 		$scope.showTimeSignatures = false;
// 	};
//
//
// 	//=============================================
// 	// Get number of beats to inject into template
// 	//=============================================
// 	$scope.getBeats = function(num) {
//
// 		var value = Number(num);
// 		return new Array(value);
// 	};
// 	$scope.getBeats($scope.beats);
//
//
// 	//=========================
// 	// Run metronome & animate
// 	//=========================
// 	$scope.click = function() {
//
// 		$scope.run          = !$scope.run;
// 		$scope.barsInt      = Number($scope.bars);
// 		$scope.firstMeasure = 0;
// 		$scope.interval     = ((60/$scope.bpm) / ($scope.barsInt/4)) * 1000;
//
// 		if ($scope.run == true) {
//
// 			$scope.metronomeBtnText = "Stop";
//
// 			$scope.runner = $interval(function() {
//
// 		    	$scope.firstMeasure  += 1;
//
// 		    	if ($scope.firstMeasure > $scope.beats-1) {
//
// 		    		$scope.firstMeasure = 0;
// 		    		//lowBlip.play();
// 		    	} else {
//
// 		    		//highBlip.play();
// 		    	}
// 		    }, $scope.interval);
//
// 		} else {
//
// 			$scope.metronomeBtnText = "Start";
// 			$scope.firstMeasure     = 1;
// 			$interval.cancel($scope.runner);
// 		}
// 	};
//
// 	//=====================================
// 	// Increment or Decrement bpm function
// 	//=====================================
// 	$scope.startIncDec = function(val, range) {
//
// 		$scope.incDec = $interval(function() {
//
// 			$scope.bpm = Number($scope.bpm);
//         	(range == "inc") ? $scope.bpm+=1 : $scope.bpm-=1;
// 		},60);
//     }
//
//     $scope.stopIncDec = function() {
//
// 		$interval.cancel($scope.incDec);
//     }
//
// }]);
