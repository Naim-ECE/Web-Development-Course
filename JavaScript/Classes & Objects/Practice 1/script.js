let data = "Something is cooking";

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    viewData() {
        console.log("The name is ", this.name);
        console.log("Email: ", this.email);
        console.log(data);
    }    
}

let u = new User("Naim", "re@gmail.com");

u.viewData();

class Admin extends User {
    constructor(n, e) {
        super(n, e);
        // this.name = n;
        // this.email = e;
    }
    editData() {
        data = "It is cooked now!";
        super.viewData();
    }
}

let w = new Admin("Naimur", "7@gmail.com");

w.editData();