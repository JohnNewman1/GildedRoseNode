describe('SulfurasItemStrategy', function(){
  var SulfurasItemStrategy = require('../src/SulfurusItemStrategy');
  beforeEach(function(){
    sulfurasStrategy = new SulfurasItemStrategy();
    sulfuras = { name: "Sulfuras, Hand of Ragnaros", sellIn: 0, quality: 80 }
  })
  it('Returns the item as it was', function(){
    sulfurasStrategy.updateItem(sulfuras)
    expect(sulfuras).toEqual({ name: "Sulfuras, Hand of Ragnaros", sellIn: 0, quality: 80 })
  })
})
