
app.directive('swMetronome', [
		   '$interval', 
		   '$timeout', 
	       function ($interval, $timeout) {

    return {

    	restrict: 'A',
    	templateUrl: 'ng-views/metronome.html',
        link : function(scope, element, attrs) {      

        	// Defaults
        	scope.selectedTimeSignature = "4/4"; 
        	scope.beats                 = 4;
			scope.bars                  = 4;

			// Scope vars
			scope.run                   = false;
			scope.pulsing               = false;
			scope.timeSignatures        = [
				{ time: "4/4", beats: "4", bars: "4" },
				{ time: "12/8", beats: "12", bars: "8" }
			];

			// Get time signature and define new scope vars
			scope.getTimeSignature = function() {

				// ERRORS OUT BELOW - to fix
				scope.beats = scope.selectedTimeSignature.beats;
				scope.bars  = selectedTimeSignature.bars;
				console.log(scope.selectedTimeSignature);
				// console.log(scope.beats);
				// console.log(scope.bars);
			};

			// Run metronome
			scope.click = function() {

				var firstMesure = 1;
				scope.interval = 1000 / (scope.bpm / 60);
				scope.run      = !scope.run;

				if (scope.run == true) {

					scope.runner = $interval(function() {

				      firstMesure  += 1;
				      scope.pulsing = true;

				      if (firstMesure > 4) {

				        firstMesure = 1;
				      }

				      $timeout(function() {

				        scope.pulsing = false;
				      }, scope.interval/2);
				      
				    }, scope.interval); 

				} else {

					scope.pulsing = false;
					firstMesure = 1;
					$interval.cancel(scope.runner);
				}
			}
        }
    }
}]);


