import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Sulfuras test', () => {

    it('does not change', function() {
        const gildedRose = new GildedRose([ new Item('Sulfuras, Hand of Ragnaros', 6, 80)]);

        const items = gildedRose.updateQuality();

        expect(items[0].sellIn).to.equal(6);
        expect(items[0].quality).to.equal(80);
    });
});

describe('Tests for other items', () => {

    it('sellIn <= 0', function() {
        const gildedRose = new GildedRose([ new Item('Bread', 0, 2),  new Item('Bread', -1, 2)]);

        const items = gildedRose.updateQuality();

        expect(items[0].sellIn).to.equal(-1);
        expect(items[0].quality).to.equal(0);
        expect(items[1].sellIn).to.equal(-2);
        expect(items[1].quality).to.equal(0);
    });

    it('sellIn > 0', function() {
        const gildedRose = new GildedRose([ new Item('Bread', 4, 10)]);

        const items = gildedRose.updateQuality();

        expect(items[0].sellIn).to.equal(3);
        expect(items[0].quality).to.equal(9);
    });
});


describe('Aged Brie tests', () => {

    it('sellIn > 0', function() {
        const gildedRose = new GildedRose([ 
            new Item('Aged Brie', 4, 20), 
            new Item('Aged Brie', 5, 50)
        ]) ;

        const items = gildedRose.updateQuality();

        expect(items[0].sellIn).to.equal(3);
        expect(items[0].quality).to.equal(21);
        expect(items[1].sellIn).to.equal(4);
        expect(items[1].quality).to.equal(50);
    });

    it('sellIn <= 0', function() {
        const gildedRose = new GildedRose([ 
            new Item('Aged Brie', 1, 48 ),
            new Item('Aged Brie', 1, 49 ),
            new Item('Aged Brie', 0, 49),
            new Item('Aged Brie', 0, 50)

        ]) ;

        const items = gildedRose.updateQuality();

        expect(items[0].quality).to.equal(50);
        expect(items[1].quality).to.equal(50);
        expect(items[2].quality).to.equal(50);
        expect(items[3].quality).to.equal(50);
    });
});

describe('Backstages passes tests', () => {

    it('sellIn < 0', function() {
        const gildedRose = new GildedRose([ 
            new Item('Backstage passes to a TAFKAL80ETC concert', -1, 35),
        ]) ;

        const items = gildedRose.updateQuality();

        expect(items[0].quality).to.equal(0);


    });
    it('sellIn > 11', function() {
        const gildedRose = new GildedRose([ 
            new Item('Backstage passes to a TAFKAL80ETC concert', 14, 20),
        ]) ;

        const items = gildedRose.updateQuality();

        expect(items[0].quality).to.equal(21);
    });

    it('sellIn <= 10', function() {
        const gildedRose = new GildedRose([ 
            new Item('Backstage passes to a TAFKAL80ETC concert', 10, 43),
            new Item('Backstage passes to a TAFKAL80ETC concert', 10, 49),
        ]) ;

        const items = gildedRose.updateQuality();

        expect(items[0].quality).to.equal(45);
        expect(items[1].quality).to.equal(50);

    });

    it('sellIn < 6', function() {
        const gildedRose = new GildedRose([ 
 
            new Item('Backstage passes to a TAFKAL80ETC concert', 6, 45),
            new Item('Backstage passes to a TAFKAL80ETC concert', 6, 48),
            new Item('Backstage passes to a TAFKAL80ETC concert', 6, 49)
        ]) ;

        const items = gildedRose.updateQuality();

        expect(items[0].quality).to.equal(48);
        expect(items[1].quality).to.equal(50);
        expect(items[2].quality).to.equal(50);

    });
});

describe('Conjured Mana Cake tests', () => {

    it('sellIn <= 0', function() {
        const gildedRose = new GildedRose([ new Item('Conjured Mana Cake', 0, 4), 
                                            new Item('Conjured Mana Cake', 0, 3)]);
        const items = gildedRose.updateQuality();

        expect(items[0].sellIn).to.equal(-1);
        expect(items[0].quality).to.equal(0);
        expect(items[1].sellIn).to.equal(-1);
        expect(items[1].quality).to.equal(0);
    });

    it('sellIn > 0', function() {
        const gildedRose = new GildedRose([ new Item('Conjured Mana Cake', 10, 10),
                                            new Item('Conjured Mana Cake', 4, 1)]);

        const items = gildedRose.updateQuality();

        expect(items[0].sellIn).to.equal(9);
        expect(items[0].quality).to.equal(8);
        expect(items[1].sellIn).to.equal(3);
        expect(items[1].quality).to.equal(0);
    });
});
