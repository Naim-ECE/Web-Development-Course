// let buttonTheme = document.getElementsByClassName("b1");

// let buttonTheme2 = document.getElementsByClassName("b2");

let buttonTheme = document.querySelector(".b1"), buttonTheme2 = document.querySelector(".b2");

let paras = document.querySelectorAll("p");
// console.dir(paras);

console.dir(document.body.lastChild);

let div = document.querySelector("div");

console.dir(div);

let h3 = document.querySelector("h3");

h3.innerText = h3.innerText + " Program by Naim";

let divs = document.querySelectorAll(".box");

// divs[0].innerText = "BOX1";
// divs[1].innerText = "BOX2";
// divs[2].innerText = "BOX3";
let inx = 1;
for(let i of divs) {
    i.innerText = `BOX${inx}`;
    ++inx;
}

let 