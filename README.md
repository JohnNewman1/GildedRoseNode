# Gilded Rose JS

[![Build Status](https://travis-ci.org/JohnNewman1/GildedRoseTake2.svg?branch=master)](https://travis-ci.org/JohnNewman1/GildedRoseTake2)

This project was set by Makers Academy as a practise tech test.

### Specification

https://github.com/emilybache/GildedRose-Refactoring-Kata/blob/master/GildedRoseRequirements.txt

### Planning

- Full feature test for the legacy code
- Add the new feature
- Refactor the legacy code to be easier to use and read

### Installation and use

1. Fork and clone the repository
2. Open ``GildedRose.html`` in the browser, It will show calculations for ten days

### Approach

I have taken a interest in design patterns and wanted to implement this kata using the strategy pattern. The strategy pattern is implemented by creating different methods depending on a case. This case is checked at run time and the correct method is called. This allows for easy adaption and much smaller methods.

I planned to create a different strategy depending on the item name and call this upon the updateItem method being run in the shop class (please see the UML diagram below for further details)

### UML Diagram

![UML](GildedRose.png)

### Code Snippet

Shop Class

```
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
```

### Technology

- Javascript
- Node.js
- Jquery
- HTML

### Testing

The project was test driven using Jasmine

To run the tests enter ``npm run test`` in the command line.
