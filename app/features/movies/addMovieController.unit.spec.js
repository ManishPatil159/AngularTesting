describe('Testing Add Edit Movie controller', function () {

var movies = [
        {
            id: 0,
            title: "Game of Thrones",
            year: 2011,
            favorite: true
        },
        {
            id: 1,
            title: 'Walking Dead',
            year: 2010,
            favorite: false
        } 
    ];

    search =  function (nameKey, myArray) {
        for (var i = 0; i < myArray.length; i++) {
            if (myArray[i].id ===parseInt(nameKey) ) {
                return myArray[i];
            }
        }
    };

    beforeEach(module('app'));

    var controller;
    var scope;
    var jzAccountService;

    beforeEach(angular.mock.module(function ($provide) {
        $provide.service('movieService', function mockService($q, $timeout) {
            return {
                addMovie: function (movie) {
                    var deferral = $q.defer();
                    movie.id = movies.length;
                    deferral.resolve(movies.push(movie));
                    return deferral.promise;
                },
                 updateMovie : function (show){
                    var deferral = $q.defer();
                    var rec = search(show.id,movies);
                    rec.title = show.title;
                    rec.year = show.year;
                    rec.favorite = show.favorite;
                    deferral.resolve(rec);
                    return deferral.promise;
                }
            };
        });
    }));

    beforeEach(angular.mock.inject(function (_$controller_,movieService) {
        movieService = movieService;
        controller = _$controller_('addMovieController', {});
    }));

    it('should add a moviesController controller', function () {
        var show = {
            id: 3,
            title: 'Walking Dead',
            year: 2011,
            favorite: false
        };      
        controller.addShow(show);
        expect(movies.length).toBe(3);
    });
        it('should update moviesController controller', function () {
        var show = {
            id: 1,
            title: 'Walking Dead1',
            year: 2015,
            favorite: false
        };      
        controller.updateShow(show);
        var updatedRecord = search(show.id,movies);
        expect(updatedRecord.title).toBe('Walking Dead1');
    });
});
