import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Gilded Rose', () => {

    it('master test', function() {
        const itemsArray = [
            new Item('Aged Brie', 10, 4), 
            new Item('Sulfuras, Hand of Ragnaros', 6, 80), 
            new Item('Backstage passes to a TAFKAL80ETC concert', 0, 10),
            new Item('Bread', 5, 5),
            new Item('Bread', 0, 4),
            new Item('Aged Brie', 0, 50),
            new Item('Backstage passes to a TAFKAL80ETC concert', 10, 10),
            new Item('Backstage passes to a TAFKAL80ETC concert', 5, 10),
            new Item('Aged Brie', 0, 48)
    ]
        const gildedRose = new GildedRose(itemsArray);

        const items = gildedRose.updateQuality();

        expect(items[0].quality).to.equal(5);
        expect(items[1].quality).to.equal(80);
        expect(items[2].quality).to.equal(0);
        expect(items[3].quality).to.equal(4);
        expect(items[4].quality).to.equal(2);
        expect(items[5].quality).to.equal(50);
        expect(items[6].quality).to.equal(12);
        expect(items[7].quality).to.equal(13);
        expect(items[8].quality).to.equal(50);

    });

});