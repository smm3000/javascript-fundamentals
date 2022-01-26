const Candy = require('./candy')

class ShoppingBasket {
  constructor() {
    this.basket = []
  }

  getTotalPrice() {
    let totalPrice = 0;
    this.basket.forEach((item) => {
      totalPrice += item.getPrice();
    });
    return totalPrice
  }

  addItem(item) {
    this.basket.push(item);
    return this.basket;
  }
}


module.exports = ShoppingBasket;
module.exports = Candy;



// for getTotalPrice
// -> let totalprice = 0
