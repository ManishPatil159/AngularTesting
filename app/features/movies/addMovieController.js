angular.module('app').controller('addMovieController', function(movieService, $routeParams, $location, $filter) {
    var vm = this; 
    vm.label = "Add/Edit Movies";
    vm.id = $routeParams.id;
    // vm.newshow = {};
    // vm.newshow.title='';
    // vm.newshow.year=0;
    // vm.newshow.favorite=false;
    if (vm.id) {
        movieService.getMovieById(vm.id).then(function (data) {
            vm.newshow = data;
        });
    }
    vm.addShow = function (showName, ShowYear, isFav) {   
        var show ={};
        show.title=showName;
        show.year=ShowYear;
        show.favorite=isFav;
        movieService.addMovie(show).then(function () {
            vm.newshow = {};
            $location.path('/Movies');
        });
    };
    vm.addShow = function (show) {        
        movieService.addMovie(show).then(function () {
            vm.newshow = {};
            $location.path('/Movies');
        });
    };
    vm.updateShow = function (show) {
        movieService.updateMovie(show).then(function () {
            vm.newshow = {};
            $location.path('/Movies');
        });
    };
});