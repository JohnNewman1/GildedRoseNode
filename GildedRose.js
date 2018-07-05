class TicketItemStrategy {

  updateItem(item){
    if(item.sellIn <= 5) {
      item.quality += 3
    }
    else if(item.sellIn <= 10) {
      item.quality += 2
    }
    else {
      item.quality += 1
    }
    if (this._aboveFifty(item)) {
      item.quality = 50
    }
    if (this._sellInNegative(item)){
      item.quality = 0
    }
    item.sellIn -= 1
  }

  _aboveFifty(item){
    return (item.quality > 50);
  }
  _sellInNegative(item){
    return (item.sellIn < 1);
  }
}

class SulfurasItemStrategy {

  updateItem(item){
  }
}

class NormalItemStrategy {

  updateItem(item){
    this._sellInNegative(item) ? item.quality -= 2 : item.quality -= 1;
    if(this._qualityNegative(item)) {
      item.quality = 0
    }
    item.sellIn -= 1
  }

  _qualityNegative(item){
    return (item.quality <= 0);
  }
  _sellInNegative(item){
    return (item.sellIn < 1);
  }
}

class ConjuredItemStrategy {

  updateItem(item){
    this._sellInNegative(item) ? item.quality -= 4 : item.quality -= 2;
    if(this._qualityNegative(item)) {
      item.quality = 0
    }
    item.sellIn -= 1
  }

  _qualityNegative(item){
    return (item.quality <= 0);
  }
  _sellInNegative(item){
    return (item.sellIn < 1);
  }
}

class AgedBrieStrategy {

  updateItem(item){
    this._sellInNegative(item) ? item.quality += 2 : item.quality += 1;
    if(this._aboveFifty(item)) {
      item.quality = 50
    }
    item.sellIn -= 1
  }

  _aboveFifty(item){
    return (item.quality > 50);
  }
  _sellInNegative(item){
    return (item.sellIn < 1);
  }
}

class Item {

  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

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
