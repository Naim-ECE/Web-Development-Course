let a = 5;
let b = 4;

console.log("Here, a = ", a, " & b = ", b);

console.log("a + b = ", a + b);
console.log("a - b = ", a - b);
console.log("a * b = ", a * b);
console.log("a / b = ", a / b);
console.log("a % b = ", a % b);

a = 2, b = 3;

console.log("Here, a = ", a, " & b = ", b);
console.log("a ** b (Exponent) = ", a ** b);
console.log("a ** b ** 2 = ", a ** b ** 2);
console.log("a ** b ** 3 = ", a ** b ** 3);

++a, --b;

console.log("Here, ++a = ", a, " & --b = ", b);

a += a, b -= 1;

console.log("Here, a = ", a, " & b = ", b);

b = 4;

console.log("After += & -= & b = 2 Here, a = ", a, " & b = ", b);

console.log("a % b = ", a % b);

console.log("a ** b = ", a ** b);

a = 2, c = "2";

console.log("Here, a = ", a, " & c = ", c);
console.log("a == c", a == c);
console.log("a === c", a === c);

a = 4, b = 5;
let cond1 = a > b;
let cond2 = a === 4;

console.log("cond1 && cond2 == ", cond1 && cond2);

console.log("cond1 || cond2 == ", cond1 || cond2);

console.log("!(cond1 && cond2) == ", !(cond1 && cond2));

let mode = "dark";
let color;

if (mode == "dark") {
    color = "black";
}
else {
    color = "white";
}

console.log(color);

let age = 19;
let boyosh = 17;

let result = age >= 18 ? "Adult" : "Not adult";

console.log(result);

boyosh >= 18 ? console.log("Adult") : console.log("Not adult"); 

alert("I'm Naim");

let age2 = prompt("Input your age");
console.log("Your age is ", age2);

let age3 = prompt("Enter a number");

age3 % 5 === 0 ? console.log(age3," is multiple of 5") : console.log(age3," isn't the multiple of 5");