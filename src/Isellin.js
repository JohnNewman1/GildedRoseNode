class IsellIn {
  constructor() {
    this.strategy = {
      sulfurus: function(item){"hi"},
      normal: function(item){
        item.sellIn -= 1;}
    }
  }
}

module.exports = IsellIn;
