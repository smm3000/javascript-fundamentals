const Candy = require('./candy')

describe('Candy', () => {
  describe('getName', () => {

    it('returns the name', () => {
      const mars = new Candy('Mars', '1.00');
      expect(mars.getName()).toBe('Mars');
    })
  })

  describe('getPrice', () => {

    it('returns the price', () => {
        const mars = new Candy('Mars', '1.00');
        expect(mars.getPrice()).toBe('1.00');
    })
  })


})