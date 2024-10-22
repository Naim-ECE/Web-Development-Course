let b1 = document.querySelector("#b1");
let body = document.querySelector("body");
let a = 1;
let mod = "light";

let div = document.querySelector(".hey");
div.onmouseover = (evnt) => {
    console.log("This is a div");
    console.log(evnt.type);
    console.log(evnt);
    console.log(evnt.target);
    console.log(evnt.clientX, evnt.clientY);
};

let b2 = document.querySelector("#b2");
// let b2 = bt2.getAttribute("name");

b2.onclick = () => {
    console.log("Clicked2X");
};

b2.addEventListener("click", () => {
    console.log("button2");
});

const kisuakta = () => {
    console.log("print");
};

b2.addEventListener("click", kisuakta);

b2.addEventListener("click", () => {
    console.log("button2.0");
});

b2.removeEventListener("click", kisuakta);

// b1.textContent = "Light-Mode";
// b1.onclick = () => {
//     console.log("Button was clicked ", a, " times");
//     ++a;
//     if(mod === "light") {
//         mod = "dark";
//         body.style.backgroundColor = "black";
//         b1.innerText = "Light-Mode";
//     }
//     else {
//         mod = "light";
//         body.style.backgroundColor = "white";
//         b1.textContent = "Dark-Mode";
//     }
// };

b1.textContent = "Move to Dark-Mode";
b1.onclick = () => {
    console.log("Button was clicked ", a, " times");
    ++a;
    if(mod === "light") {
        mod = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
        b1.textContent = "Move to Light-Mode";
    }
    else {
        mod = "light";
        body.classList.add("light");
        body.classList.remove("dark");
        b1.textContent = "Move to Dark-Mode";
    }
};