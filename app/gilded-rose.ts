export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }


    updateQuality(){
        for (let i = 0; i< this.items.length; i++){

            let quality = this.items[i].quality;
            let name = this.items[i].name;
            let sellIn = this.items[i].sellIn;

            if (name !== 'Sulfuras, Hand of Ragnaros'){
                if(name == 'Aged Brie'){
                    sellIn -= 1;
                    if(quality < 50) {
                        if(sellIn > 0 || sellIn <= 0 && quality === 49 ) {
                            quality += 1;
                        } else if (sellIn <= 0 && quality < 49){
                            quality +=2;
                        }
                    }
                } else if(name == 'Backstage passes to a TAFKAL80ETC concert'){
                    if (sellIn <= 0) {
                        quality = 0;
                    } else if(sellIn > 0 && quality < 50){
                        quality +=1;
                        if (sellIn < 11 && quality < 50) {
                            quality += 1;
                        } 
                        if (sellIn <= 6 && quality < 50){
                            quality += 1;  
                        }
                    }
                sellIn -= 1;
            }else if(name === 'Conjured Mana Cake'){
                sellIn -=1;
                if(sellIn > 0){
                    quality = quality > 1 ? quality -2 : 0;
                }  
                if (sellIn <= 0){
                    quality = quality > 3 ? quality -4 : 0;
                }

            }else {
                    sellIn -= 1;
                    if (sellIn > 0 && quality > 0){
                        quality -= 1;
                    }
                    if(sellIn <= 0){
                        quality = quality > 1 ? quality -2 : 0;
                    }
                }
            }
            this.items[i].quality = quality;
            this.items[i].sellIn = sellIn;
        }
        return this.items;
    }
}