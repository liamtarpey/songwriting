

	app.config(function($routeProvider, $locationProvider) {

        var path = 'ng-views/';

		$routeProvider

        .when('/', {
            templateUrl : path + 'song.html',
            controller  : 'song'
        })

        .otherwise({
            redirectTo: '/'
        });

        $locationProvider.html5Mode(true);

	});