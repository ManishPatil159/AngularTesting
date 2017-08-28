describe('Protractor Demo App', function() {                        //suits
  var firstLabel = element(by.model('routeVM.newshow.title'));
  var secondLabel = element(by.model('routeVM.newshow.year'));
  var goButton = element(by.id('add'));
  var latestResult = element(by.binding('latest'));
  var history = element.all(by.repeater('item in routeVM.gridItems'));

  function add(a, b) {
    firstLabel.sendKeys(a);
    secondLabel.sendKeys(b);
    goButton.click();
  }

  beforeEach(function() { 
        browser.get('#');
  });

  it('should have a Records', function() {                        //specs
    element(by.id('movie')).click();
    var history = element.all(by.repeater('item in routeVM.gridItems'));
    expect(history.count()).toEqual(5);                           //expectations/assertions
  });

   it('should have add record', function() {
    element(by.id('movie')).click();
    expect(history.count()).toEqual(5);
    element(by.id('newMovie')).click();
    add('Record', 2015);
    expect(history.count()).toEqual(6);
    expect(element(by.repeater('item in routeVM.gridItems').row(5).column('title')).getText()).toEqual("Record");
    expect(element(by.repeater('item in routeVM.gridItems').row(5).column('year')).getText()).toEqual("2015");

    browser.sleep(2000);
  });
});