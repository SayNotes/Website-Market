// import { document } from "postcss";

// const { document } = require("postcss");

// const priceLocal = 100;
// let input = document.getElementById("numericInput");
// let demand = document.querySelector("h1#result");

// function formatNumberWithCommas(number) {
//   return number.toLocaleString();
// }
const listCard = document.getElementsByClassName('list-card')
const cards = document.getElementsByClassName('card')

const input = document.getElementById('inputAmount');

input.addEventListener('input', (event) => {
  let value = event.target.value;
  value = value.replace(/[^0-9]/g, '');  // Hanya mempertahankan angka
  event.target.value = value;
});
function increment() {
  let valueNumber = parseInt(input.value) || 0;
  input.value = valueNumber + 1;
}
function decrement() {
  let valueNumber = parseInt(input.value) || 0;
  if (valueNumber > 0) {
    input.value = valueNumber - 1;
  }
}
function buttonClicked() {
  alert(`Pesanan senilai Rp.${input.value} telah masuk`)
}

// window.addEventListener("scroll", function () {
//   if (window.scrollY > navbar.clientHeight) {
//     navbar.classList.add("nav-animation");
//     navbar.style.animationName = "fade-in";
//     homePage.style.marginTop = `${navbar.clientHeight}px`;
//   } else if (window.scrollY <= navbar.clientHeight ){
//     navbar.classList.remove("nav-animation");
//     homePage.style.marginTop = 0;
//   }
// });
