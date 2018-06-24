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

module.exports = NormalItemStrategy;
