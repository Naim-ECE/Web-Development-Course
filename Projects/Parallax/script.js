const parallax = document.querySelector("#parallax");
const parallax2 = document.querySelector("#parallax2");

window.addEventListener("scroll", () => {
  let offSet = window.pageYOffset;
//   console.log(`offset: ${offSet}`);
//   console.log(`offset new: ${offSet * 0.75}`);
  parallax.style.backgroundPositionY = -offSet * 0.5 + "px";
  parallax2.style.backgroundPositionY = -offSet * 0.1 + "px";
});
