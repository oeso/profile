
/* route */
angular.module( 'oos',  [ 'ngRoute'])
    .config(['$routeProvider', function($routeProvider) {

        $routeProvider
            .when('/', {templateUrl: 'main/template_main.html', controller: 'mainCtrl'})
            .when('/main', {templateUrl: 'main/template_main.html', controller: 'mainCtrl'})
            .when('/error', {templateUrl: 'error/error.html', controller: 'errorCtrl'})

            .otherwise({redirectTo: '/main'});

        //$locationProvider.html5Mode(true);

    }])