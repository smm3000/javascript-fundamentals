const ShoppingBasket = require ('./shopping-basket')

describe('ShoppingBasket', () => {
    describe('getTotalPrice', () => {
      it('return the total price', () => {
      
      const basket = new ShoppingBasket;
      const candyDouble = { getName: 'Mars', getPrice: 1.00 };
      basket.addItem(candyDouble);
      expect(basket.getTotalPrice()).toEqual(1.00);
    });

  });
    describe('addItem', () => {
      it('adds an item to the basket', () => {

        const basket = new ShoppingBasket;

        const candyDouble = {getName: 'Mars', getPrice: 1.00};
        
        expect(basket.addItem(candyDouble)).toEqual(['Mars', 1.00]);
      });
    });
});
