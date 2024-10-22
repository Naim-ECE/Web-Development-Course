function fun(a) {
    console.log(`This is a function.`);
    console.log(`Function is a ???`);
    console.log(`a = ${a}`);
}

fun(26);

const arrowFun = (p1, p2) => {
    return p1 + p2;
};

console.log("arrowFun = ", arrowFun(1, 2));

// let str = prompt("Enter a string"), count1 = 0;
// function vowel(s, count) {
//     for (let i = 0; i < s.length; ++i) {
//         if (s[i] === 'A' || s[i] === 'E' || s[i] === 'I' || s[i] === 'O' || s[i] === 'U' || s[i] === 'a' || s[i] === 'e' || s[i] === 'i' || s[i] === 'o' || s[i] === 'u') {
//             ++count;
//         }
//     }
//     console.log("Total vowels in \"", s , "\" are = ", count);
// }

// vowel(str, count1);

let a = ["Saudi Arabia", "Palestine", "Kuwait", "Singapore", "Bangladesh"];

a.forEach(function fun(value, i) { //1st technique
    console.log(`${i + 1}. ${value}`);
});

a.forEach((value) => {
    console.log(value.toUpperCase());
});

let ar = [1, 2, 3, 4];

ar.forEach((val, i) => {
    console.log("Squre of", ar[i], "is = ", val * val);
});

function moja(number) {
    console.log("Cubes = ", number * number * number);
}

ar.forEach(moja);

let newAr = ar.map((value) => { //map returns array to a new array but forEach can't do that
    return value * value * value * value;
});

console.log(newAr);

let evenAr = newAr.filter((value) => { //same as map but returns with functionality as it's given
    return value % 2 === 0;
});

console.log(evenAr);

ar = [1, 4, 200, 3, 89];

let bigAr = ar.reduce((res, cur) => {
    return res > cur ? res : cur;
});

console.log(bigAr);

let stuMrk = [75, 56, 43, 89, 90, 92, 44.75, 99.25, 98.5, 96, 94.25];

let ninetyPlus = stuMrk.filter((value) => {
    return value > 90;
});

console.log(ninetyPlus);

let inpUser = prompt("Enter an array size");
let uInput = [];

for (let i = 0; i < inpUser; ++i) {
    uInput[i] = i + 1;
}

console.log("Array is = ", uInput);

let summation = uInput.reduce((res, cur) => {
    return res + cur;
});

console.log("Sum = ", summation);

let product = uInput.reduce((res, cur) => {
    return res * cur;
});

console.log("Product = ", product);