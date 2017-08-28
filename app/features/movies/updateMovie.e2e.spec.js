describe('Protractor Demo App', function() {
  var firstLabel = element(by.model('routeVM.newshow.title'));
  var secondLabel = element(by.model('routeVM.newshow.year'));
  var goButton = element(by.id('update'));
  var latestResult = element(by.binding('latest'));
  var history = element.all(by.repeater('item in routeVM.gridItems'));

  function add(a, b) {
    firstLabel.clear().then(function() {
        firstLabel.sendKeys(a);
    });
    secondLabel.clear().then(function() {
        secondLabel.sendKeys(b);
    });
    goButton.click();
  }

  beforeEach(function() { 
        browser.get('#');
  });

  it('should have Records', function() {   
    element(by.id('movie')).click();
    var history = element.all(by.repeater('item in routeVM.gridItems'));
    expect(history.count()).toEqual(5);
  });

   it('should update a record', function() {
    element(by.id('movie')).click();
    expect(history.count()).toEqual(5);
    //element(by.id('newMovie')).click();
    element(by.repeater('item in routeVM.gridItems').row(0).column('title')).click();
    add('Record 1', 2016);
    expect(history.count()).toEqual(5);
    
    expect(element(by.repeater('item in routeVM.gridItems').row(0).column('title')).getText()).toEqual("Record 1");

  });
});