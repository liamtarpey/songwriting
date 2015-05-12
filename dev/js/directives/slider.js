
app.directive('slider', ['mainFactory', function (mainFactory) {

    return {

    	restrict: 'A',
    	template: '<div class="slider-line"><div class="slider-knob" style="left:{{leftPos}}%"></div></div>',
    	scope: {
    		config: "=slider"
    	},

        link : function(scope, element, attrs) {      

        	var floor    = scope.config.floor,
        		ceiling  = scope.config.ceiling,
        		bpm      = mainFactory.bpm, 
        		value    = bpm - floor,
        		range    = ceiling - floor,
        		newValue = value/range * 100;

            scope.draggable = false;
            scope.leftPos   = newValue;

        	// Only run functions on hover
        	element.on('mousemove', function(e) {

        		var pos = e.clientX - e.offsetX;
                console.log(pos);

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
        }
    }
}]);


