describe('IsellIn', function(){
  var IsellIn = require('../src/Isellin')
  beforeEach(function(){
    interface = new IsellIn();
    item = {sellIn: 3}
  });

  it('When strategy.sulfurus is called it will not change sellIn ', function(){
    interface.strategy.sulfurus(item);
    expect(item.sellIn).toEqual(3)
  });

  it('When strategy.sulfurus is called it will not change sellIn ', function(){
    interface.strategy.normal(item);
    expect(item.sellIn).toEqual(2)
  });
});
