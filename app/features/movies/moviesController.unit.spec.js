describe('Testing Movie controller', function () {

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

    beforeEach(module('app'));

    var controller;
    var scope;
    var jzAccountService;

    beforeEach(angular.mock.module(function ($provide) {
        $provide.service('movieService', function mockService($q, $timeout) {
            return {
                getMovies: function () {
                    var deferral = $q.defer();
                    deferral.resolve(movies);
                    return deferral.promise;
                },
                deleteMovie:function(id){
                    var deferral = $q.defer();
                    movies.splice(id,1);
                    deferral.resolve(movies);
                    return deferral.promise;
                }
            };
        });
    }));

    beforeEach(angular.mock.inject(function (_$controller_, $rootScope, movieService) {
        scope = $rootScope.$new();
        movieService = movieService;
        controller = _$controller_('moviesController', {});
    }));

    it('should have a moviesController controller', function () {
        expect(controller).toBeDefined();
        expect(controller).not.toBe(null);
    });

    it('should have gridItems present', function () {
        scope.$digest();
        expect(controller.gridItems.length).toEqual(2);
    });

    it('should delete an item from gridItems', function () {
        controller.deleteMovie({id:1});
        scope.$digest();
        expect(controller.gridItems[0].title).toEqual("Game of Thrones");
    });
});
