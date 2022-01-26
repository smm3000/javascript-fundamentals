class UserBase {

    constructor(names) {
        this.names = names;
    }

    getNames() {
        return this.names.map( user => {
            return user.name
        });
        
    }

}


module.exports = UserBase; 