describe('TicketItemStrategy', function(){
  var TicketItemStrategy = require('../src/TicketItemStrategy');
  beforeEach(function(){
    ticketStrategy = new TicketItemStrategy();
    ticketOne = { name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 11, quality: 49 }
    ticketTwo = { name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 6, quality: 23 }
    ticketThree = { name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 3, quality: 8 }
    ticketFour = { name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 0, quality: 30 }
  })
  it('Reduces sellIn by 1', function(){
    ticketStrategy.updateItem(ticketOne)
    expect(ticketOne.sellIn).toEqual(10)
  })

  it('Increases quality by 1 when sellIn above 10', function(){
    ticketStrategy.updateItem(ticketOne)
    expect(ticketOne.quality).toEqual(50)
  })

  it('Increases quality by 2 well sellIn between 5 and 10', function(){
    ticketStrategy.updateItem(ticketTwo)
    expect(ticketTwo.quality).toEqual(25)
  })

  it('Increases quality by 3 well sellIn below 5', function(){
    ticketStrategy.updateItem(ticketThree)
    expect(ticketTwo.quality).toEqual(11)
  })

  it('Will set quality to 0 when sellIn goes below 0', function(){
    ticketStrategy.updateItem(ticketFour)
    expect(ticketFour.quality).toEqual(0)
  })

  it('Will not let quality go above 50', function(){
    ticketStrategy.updateItem(ticketOne)
    ticketStrategy.updateItem(ticketOne)
    expect(ticketOne.quality).toEqual(50)
  })
})
