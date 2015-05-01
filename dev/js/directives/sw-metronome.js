
.directive('swMetronome', [
		   '$interval', 
		   '$timeout', 
	       function ($interval, $timeout) {

    return {

    	restrict: 'A',
    	templateUrl: 'ng-views/metronome.html',
        link : function(scope, element, attrs) {       

			// Scope variables
			scope.run            = false;
			scope.pulsing        = false;
			scope.timeSignatures = [
				{time: "4/4", beats: "4", bars: "4" },
				{time: "12/8", beats: "12", bars: "8" }
			];

			// Run metronome
			scope.click = function() {

				// Global variables
				var firstMesure = 1;

				// Scope variables
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
}])


