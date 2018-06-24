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

module.exports = TicketItemStrategy;
