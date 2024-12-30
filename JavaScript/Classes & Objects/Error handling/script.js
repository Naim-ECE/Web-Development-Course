let a = 26, b = 51;
console.log("a + b = ", a + b);
console.log("a = ", a);
console.log("b = ", b);
console.log("b - a", b - a);
try {
    console.log("a * b = ", a * b);
} catch(er) {
    console.log(er);
}

try {
    console.log("a * c", a * c);
}
catch(er) {
    console.log(er);
}
// console.log("a * c", a * c);
console.log("b / a = ", b / a);