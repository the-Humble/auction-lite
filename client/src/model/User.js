class User {
    constructor(email, name, password){
        this.email = email;
        this.name = name;
        this.password = password;
        this.productsPurchased = [];
    }
}

export default User;