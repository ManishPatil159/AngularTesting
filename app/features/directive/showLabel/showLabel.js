angular.module('app').directive('showLabel', function () {
    return {
        restrict: 'E',  
        scope:{
            label: '@'
        },    
        templateUrl: 'features/directive/showLabel/showLabel.html'      
    };    
});