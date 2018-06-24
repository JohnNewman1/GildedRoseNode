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

module.exports = AgedBrieStrategy;
