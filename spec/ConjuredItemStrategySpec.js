describe('ConjuredItemStrategy', function(){
  var ConjuredItemStrategy = require('../src/ConjuredItemStrategy');
  beforeEach(function(){
    conjuredStrategy = new ConjuredItemStrategy();
    conjuredItem = { name: "Conjured Mana Cake", sellIn: 1, quality: 20 }
    conjuredItemAtZero = { name: "Conjured Mana Cake", sellIn: 1, quality: 0 }
  })
  it('Reduces sellIn by 1', function(){
    conjuredStrategy.updateItem(conjuredItem)
    expect(normalItem.sellIn).toEqual(0)
  })

  it('Reduces quality by 1', function(){
    conjuredStrategy.updateItem(conjuredItem)
    expect(normalItem.quality).toEqual(18)
  })

  it('Reduces quality by 2 well sellIn is zero or below', function(){
    conjuredStrategy.updateItem(normalItem)
    conjuredStrategy.updateItem(normalItem)
    expect(normalItem.quality).toEqual(17)
  })

  it('Will not let quality go beneath 0', function(){
    conjuredStrategy.updateItem(normalItemAtZero)
    expect(normalItemAtZero.quality).toEqual(0)
  })
})
