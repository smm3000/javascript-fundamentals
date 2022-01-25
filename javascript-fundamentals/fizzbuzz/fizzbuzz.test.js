const fizzbuzz = require('./Fizzbuzz');

describe ('fizzbuzz', () => {
  it('should return "fizz" when number is divisible by 3', () => {
    expect(fizzbuzz(6)).toBe('Fizz'); 
  })
  it('should return "buzz" when number is divisible by 5', () => {
      expect(fizzbuzz(10)).toBe('Buzz');
  })
  it('should return "fizzbuzz" when number is divisible by 3 and 5', () => {
      expect(fizzbuzz(15)).toBe('FizzBuzz');
  })
  it('should just return the number when not divisible by either 3 or 5', () => {
      expect(fizzbuzz(7)).toBe(7);
  })

})
