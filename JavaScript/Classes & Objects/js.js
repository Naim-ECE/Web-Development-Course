// const Student = {
//     fullName : "Naim",
//     age : 20,
//     // vault : function() {
//     //     console.log("Done");
//     // },
//     vault() {
//         console.log("Done ", this.fullName);
//     }
// };

const obj = {
    c1() {
        console.log("It's the rate");
    }
};

const obj1 = {
    price : 10
};

const obj2 = {
    price : 26
};

obj1.__proto__ = obj;
obj2.__proto__ = obj;

class Yo {
    constructor(nam, boyosh) {
        this.puranam = nam;
        this.age = boyosh;
        console.log("Name : ", nam, " & Age : ", boyosh);
    }
    start() {
        console.log("Ting tong\n");
    }
    stop() {
        console.log("Tong ting\n");
    }
    setBrand(br) {
        this.brand = br;
        console.log("The brand is = ", br);
    }
}

let Yo1 = new Yo("Naim", 21);
let Yo2 = new Yo("Arid", 16);

Yo1.setBrand("Toyota\n");
Yo2.setBrand("Chevorlette\n");

class ChildYo extends Yo {
    start() {
        console.log("Kisuakta");
    }
}

let c = new ChildYo();
c.start();

class urruper {
    constructor(name) {
        this.species = "Homo sapiens";
        this.name = name;
        console.log("Parent enters\n");
    }
    eat() {
        console.log("I'm eating\n");
    }
};

class currupper extends urruper {
    constructor(nam) {
        console.log("Child enters\n");
        super(nam);
        console.log("Child enters\n");
        console.log(nam, "\n");
        console.log("Child finished\n");
    }
    work() {
        super.eat(); //this.eat() [both works!]
        console.log("Eat Sleep Ibadat & Repeat");
    }
}

let ctu = new currupper("Naimur");

ctu.work();