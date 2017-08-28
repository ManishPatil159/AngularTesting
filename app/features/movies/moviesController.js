angular.module('app').controller('moviesController', function(movieService) {
    var vm = this;
    vm.gridItems = [];
    vm.searchInput = '';
    vm.label = "Show Movies"; 
    
    vm.deleteMovie = function (item){
        movieService.deleteMovie(item.id).then(function (){
        });
    };

    vm.getMovies = function () {
        movieService.getMovies().then(function (data) {
            vm.gridItems = data;
        });
    };
    vm.getMovies();
});
