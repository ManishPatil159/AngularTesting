var sampleApp = angular.module('app', ['ngRoute']);

sampleApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/Movies', {
                templateUrl: 'features/movies/movies.html',
                controller: 'moviesController',
                controllerAs: 'routeVM',
            }).
            when('/AddNewMovie', {
                templateUrl: 'features/movies/addMovie.html',
                controller: 'addMovieController',
                controllerAs: 'routeVM',
            }).
             when('/EditMovie/:id', {
                templateUrl: 'features/movies/addMovie.html',
                controller: 'addMovieController',
                controllerAs: 'routeVM',
            }).
            otherwise({
                redirectTo: '/'
            });
    }]);