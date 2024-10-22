// let a = prompt("Enter a number"), sum = 0;

// for (let i = 1; i <= a; ++i) {
//     console.log("My name is Naim");
//     sum += i;
// }

// console.log("Sum form 1 to ", a, " is = ", sum);

let s = "Hello_Naim", count = 0;

for(let i of s) {
    console.log("i = ", i);
    ++count;
}
console.log("Total Characters: ", count);

let student = {
    fullName: "Mugdho",
    age: 25,
    cgpa: 3.89,
    isPass: true
};

for(let i in student) {
    console.log("i = ", i, " details = ", student[i]);
}

// let gameNum = 26, guess = prompt("Guess your game number"), h = 0;

// for( ; ; ) {
//     // guess = prompt("Guess your game number");
//     if(guess == gameNum) {
//         console.log("CORRECT");
//         alert("You've guessed correct. It's 26");
//         break;
//     }
//     else {
//         ++h;
//         console.log("WRONG!(", h, ")");
//         alert("It's wrong. Try again!");
//         guess = prompt("Guess your game number again");
//     }
// }

let e = "Naim";
let f = e.length;
console.log(f);

let object = {
    item: "Pen",
    dam: 10
};

console.log("The cost of", object.item, "is", object.dam, "taka");

let interpolation = `The cost of ${object.item} is ${object.dam} taka`;
console.log(interpolation);

let pro = prompt("Enter your fullname");

let pro2 = `username: @${pro}${pro.length}`;
console.log(pro2);