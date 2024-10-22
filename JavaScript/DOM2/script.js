let div = document.querySelector("div");
let para = document.querySelector("p");
let para2 = document.querySelector("h4")

let nam = div.getAttribute("name");
console.log(nam);

let p = para.getAttribute("eidarnam");
console.log(p);

console.log(para2.getAttribute("eidaholo"));

para2.setAttribute("eidaholo", "finally");

console.log(para2.getAttribute("eidaholo"))

div.style.backgroundColor = "red", div.style.color = "white";
div.textContent = "This is a div bro";

let newBtn = document.createElement("button");

newBtn.innerText = "Click Here!";
para.after(newBtn);
newBtn.remove();

const fragment = document.createDocumentFragment();
const li = fragment
    .appendChild(document.createElement("section"))
    .appendChild(document.createElement("ul"))
    .appendChild(document.createElement("li"));
li.innerText = "hello world";
document.body.appendChild(fragment);

let kisuakta = document.querySelector("#yo2");
let fruit = ["Orange", "Banana", "Mango", "Wateremelon"];

for(let i = 0; i < fruit.length; ++i) {
    let a = document.createElement("li");
    a.textContent = fruit[i];

    kisuakta.appendChild(a);
}
c = kisuakta.children[2];
let b = document.createElement("li");
b.textContent = "Lemon";
kisuakta.replaceChild(b, c);

kisuakta.removeChild(kisuakta.children[1]);

kisuakta.insertBefore(kisuakta.children[1], kisuakta.children[0]);

let cbtn = document.createElement("button");

cbtn.innerText = "click me";
cbtn.style.backgroundColor = "red";
cbtn.style.color = "white";

document.querySelector("body").prepend(cbtn);

let v = document.querySelector(".content");

v.classList.add("port", "col", "aim");
v.classList.remove("aim");