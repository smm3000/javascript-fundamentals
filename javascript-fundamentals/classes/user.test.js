const User = require('./user')

describe ('getName', () => {
    it('returns the name', () => {
        const user = new User('Uma');
        expect(user.getName()).toBe('Uma');
    });

    
    it('returns the intro with the name', () => {
        const user = new User('Uma');
        expect(user.getIntroduction()).toBe('Hi, my name is Uma')
    });
});