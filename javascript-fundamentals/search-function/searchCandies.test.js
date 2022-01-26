const searchCandies = require('./searchCandies')

describe('searchCandies', () => {
    it('returns candies beginning with "Ma" and less than a maximum price of 10', () => {
        expect(searchCandies('Ma',10)).toEqual(['Mars','Maltesers']);
    });

    it('returns candies beginning with "Ma" and less than a maximum price of 2', () => {
        expect(searchCandies('Ma',2)).toEqual(['Mars']);
    })

    it('returns candies beginning with "S" and less than a maximum price of 10', () => {
        expect(searchCandies('S',10)).toEqual(['Skitties', 'Skittles', 'Starburst']);
    })

    it('returns candies beginning with "S" and less than a maxiumum price of 4', () => {
        expect(searchCandies('S',4)).toEqual(['Skitties', 'Skittles']);
    })


});
