const namesANDDiscounts = [
    { name: 'Anna', discount: 50 },
    { name: 'Laura', discount: 40 },
    { name: 'Josh', discount: 30 },
    { name: 'Min', discount: 50 },
    { name: 'Karla', discount:  6 }
];

const generateMessages = (namesANDDiscounts) => {
  return namesANDDiscounts.map(item => {
      const name = item.name;
      const discount = item.discount;
      return `Hi ${name}! ${discount}% off our best candies for you today!`;
    });
}