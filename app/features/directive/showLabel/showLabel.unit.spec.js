// describe('Unit testing show label', function() {
//   var $compile,
//       $rootScope;

//   beforeEach(module('app'));
  
//   beforeEach(inject(function(_$compile_, _$rootScope_){ 
//     $compile = _$compile_;
//     $rootScope = _$rootScope_;  
//   }));

//   it('Replaces the element with the appropriate content', function() {   
//     var element=$compile('<show-label label="Show Movies"></show-label>')($rootScope);
//     $rootScope.$digest();  
//     expect(element.html()).toContain("Show Movies");
//   });
// });