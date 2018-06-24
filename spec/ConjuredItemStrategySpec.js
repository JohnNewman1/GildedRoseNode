describe('ConjuredItemStrategy', function(){
  var ConjuredItemStrategy = require('../src/ConjuredItemStrategy');
  beforeEach(function(){
    conjuredStrategy = new ConjuredItemStrategy();
    conjuredItem = { name: "Conjured Mana Cake", sellIn: 1, quality: 20 }
    conjuredItemAtZero = { name: "Conjured Mana Cake", sellIn: 1, quality: 0 }
  })
  it('Reduces sellIn by 1', function(){
    conjuredStrategy.updateItem(conjuredItem)
    expect(conjuredItem.sellIn).toEqual(0)
  })

  it('Reduces quality by 2', function(){
    conjuredStrategy.updateItem(conjuredItem)
    expect(conjuredItem.quality).toEqual(18)
  })

  it('Reduces quality by 4 well sellIn is zero or below', function(){
    conjuredStrategy.updateItem(conjuredItem)
    conjuredStrategy.updateItem(conjuredItem)
    expect(conjuredItem.quality).toEqual(14)
  })

  it('Will not let quality go beneath 0', function(){
    conjuredStrategy.updateItem(conjuredItemAtZero)
    expect(conjuredItemAtZero.quality).toEqual(0)
  })
})
