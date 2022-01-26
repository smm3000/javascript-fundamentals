const User = require ('/Users/samirmalik/Makers/Projects/Week6/javascript-fundamentals/classes/user.js')
const UserBase = require('./userBase')

describe ('getNames', () => {
    it('returns the names', () => {
        
        const users = [
            new User('Uma'),
            new User('Josh'),
            new User('Ollie')
          ];

        const userBase = new UserBase(users);
        expect(userBase.getNames()).toEqual(['Uma','Josh','Ollie']);
    });
})