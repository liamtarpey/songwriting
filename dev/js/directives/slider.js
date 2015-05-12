
app.directive('slider', ['mainFactory', function (mainFactory) {

    return {

    	restrict: 'A',
    	templateUrl: 'ng-views/slider.html',
    	scope: {
    		config: "=slider"
    	},

        link : function(scope, element, attrs) {   

            scope.draggable = false;

        	var floor   = scope.config.floor,
        		ceiling = scope.config.ceiling,
                range   = ceiling - floor;

            scope.$watch(function() {

                scope.value    = mainFactory.bpm - floor;
                scope.leftPos  = scope.value/range * 100;
            });
            

        	// Only run functions on hover
        	element.on('mousemove', function(e) {

        		var pos = e.clientX - e.offsetX;
                //console.log(pos);

        		if(scope.draggable == true) {

        			// move the slider
        		}
        	});

        	element.on('mousedown', function(e) {

        		scope.draggable = true;
        	});

        	element.on('mouseup', function(e) {

        		scope.draggable = false;
        	});

            scope.incDec = function(val, range) {

                (range == "inc") ? mainFactory.bpm+=1 : mainFactory.bpm-=1;       
            }
        }
    }
}]);


