var AgedBrieStrategy = require('../src/AgedBrieItemStrategy');
var ConjuredItemStrategy = require('../src/ConjuredItemStrategy');
var NormalItemStrategy = require('../src/NormalItemStrategy');
var SulfurasItemStrategy = require('../src/SulfurusItemStrategy');
var TicketItemStrategy = require('../src/TicketItemStrategy');

class Shop {
  constructor(items=[], obj){
    this.items = items;
    this.strategy = obj || {
      "Sulfuras, Hand of Ragnaros": new SulfurasItemStrategy(),
      "Conjured Mana Cake": new ConjuredItemStrategy(),
      "Backstage passes to a TAFKAL80ETC concert": new TicketItemStrategy(),
      "Aged Brie": new AgedBrieStrategy()
    }
  }

    updateQuality(){
      this.items.forEach(function(item){
        var strategy = this.strategy[item.name] || new NormalItemStrategy();
        strategy.updateItem(item);
      }.bind(this))
    }
}

module.exports = Shop;
