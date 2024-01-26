import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';


describe('Gilded Rose', () => {

    it('check sulfuras unchanged', function() {
        const gildedRose = new GildedRose([ new Item('Sulfuras, Hand of Ragnaros', 6, 80)]);

        const items = gildedRose.updateQuality();

        expect(items[0].sellIn).to.equal(6);
        expect(items[0].quality).to.equal(80);
    });
});

describe('Gilded Rose', () => {

    it('other item past sellin', function() {
        const gildedRose = new GildedRose([ new Item('Bread', 0, 2)]);

        const items = gildedRose.updateQuality();

        expect(items[0].sellIn).to.equal(-1);
        expect(items[0].quality).to.equal(0);
    });
});


describe('Gilded Rose', () => {

    it('other item before sellin', function() {
        const gildedRose = new GildedRose([ new Item('Bread', 4, 10)]);

        const items = gildedRose.updateQuality();

        expect(items[0].sellIn).to.equal(3);
        expect(items[0].quality).to.equal(9);
    });
});

describe('Gilded Rose', () => {

    it('brie sellin date', function() {
        const gildedRose = new GildedRose([ 
            new Item('Aged Brie', 4, 20), 
            new Item('Aged Brie', 1, 49 ),
            new Item('Aged Brie', 0, 49)
        ]) ;

        const items = gildedRose.updateQuality();

        expect(items[0].sellIn).to.equal(3);
        expect(items[1].sellIn).to.equal(0);
        expect(items[2].sellIn).to.equal(-1);
    });
});

describe('Gilded Rose', () => {

    it('brie quality', function() {
        const gildedRose = new GildedRose([ 
            new Item('Aged Brie', 4, 20), 
            new Item('Aged Brie', 1, 48 ),
            new Item('Aged Brie', 1, 49 ),
            new Item('Aged Brie', 0, 49),
            new Item('Aged Brie', 0, 50)

        ]) ;

        const items = gildedRose.updateQuality();

        expect(items[0].quality).to.equal(21);
        expect(items[1].quality).to.equal(50);
        expect(items[2].quality).to.equal(50);
        expect(items[3].quality).to.equal(50);
        expect(items[4].quality).to.equal(50);
    });
});

describe('Gilded Rose', () => {

    it('backstage passes quality', function() {
        const gildedRose = new GildedRose([ 
            new Item('Backstage passes to a TAFKAL80ETC concert', 0, 35),
            new Item('Backstage passes to a TAFKAL80ETC concert', 14, 20),
            new Item('Backstage passes to a TAFKAL80ETC concert', 10, 43),
            new Item('Backstage passes to a TAFKAL80ETC concert', 10, 49),
            new Item('Backstage passes to a TAFKAL80ETC concert', 6, 45),
            new Item('Backstage passes to a TAFKAL80ETC concert', 6, 48),
            new Item('Backstage passes to a TAFKAL80ETC concert', 6, 49)
        ]) ;

        const items = gildedRose.updateQuality();

        expect(items[0].quality).to.equal(0);
        expect(items[1].quality).to.equal(21);
        expect(items[2].quality).to.equal(45);
        expect(items[3].quality).to.equal(50);
        expect(items[4].quality).to.equal(48);
        expect(items[5].quality).to.equal(50);
        expect(items[6].quality).to.equal(50);

    });
});

