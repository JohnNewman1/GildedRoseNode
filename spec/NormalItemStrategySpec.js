describe('NormalItemStrategy', function(){
  var NormalItemStrategy = require('../src/NormalItemStrategy');
  beforeEach(function(){
    normalStrategy = new NormalItemStrategy();
    normalItem = { name: "normalItem", sellIn: 1, quality: 20 }
    normalItemAtZero = { name: "normalItem", sellIn: 1, quality: 0 }
  })
  it('reduces sellIn by 1', function(){
    normalStrategy.updateItem(normalItem)
    expect(normalItem.sellIn).toEqual(0)
  })

  it('reduces quality by 1', function(){
    normalStrategy.updateItem(normalItem)
    expect(normalItem.quality).toEqual(19)
  })

  it('reduces quality by 2 well sellIn is zero or below', function(){
    normalStrategy.updateItem(normalItem)
    normalStrategy.updateItem(normalItem)
    expect(normalItem.quality).toEqual(17)
  })

  it('Will not let quality go beneath 0', function(){
    normalStrategy.updateItem(normalItemAtZero)
    expect(normalItemAtZero.quality).toEqual(0)
  })
})
