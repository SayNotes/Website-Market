// import { document } from "postcss";

// const { document } = require("postcss");

// const priceLocal = 100;
// let input = document.getElementById("numericInput");
// let demand = document.querySelector("h1#result");

// function formatNumberWithCommas(number) {
//   return number.toLocaleString();
// }]

const cardList = document.getElementsByClassName('list-card');
const cards = document.getElementsByClassName('card');
const btnPlus = document.getElementsByClassName('btn-plus');
const btnMinus = document.getElementsByClassName('btn-minus');
const input = document.getElementsByClassName('inputAmount');
// input.addEventListener('input', (event) => {
//   let value = event.target.value;
//   value = value.replace(/\D/g, '');  // Hanya mempertahankan digit (angka)
//   event.target.value = value;
// });



function increment() {
  let valueNumber = parseInt(input.inputAmount.value) || 0;
  input.inputAmount.value = valueNumber + 100;
}

function decrement() {
  let value = parseInt(input.inputAmount.value) || 0;
  if (value > 0) {
    input.inputAmount.value = value - 100;
  }
}

function buttonClicked() {
  alert(`Pesanan senilai Rp.${input.inputAmount.value} telah masuk`)
};

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



const listCategory = document.getElementById("list-category");
let isDragging = false;
let startX = 0;

const startDrag = (e) => {
  isDragging = true;
  listCategory.classList.add("scroll-auto");
  startX = e.clientX || e.touches[0].clientX;
};
console.log(startX);

const drag = (e) => {
  if (!isDragging) return;
  const currentX = e.clientX || e.touches[0].clientX;
  const diffX = startX - currentX;
  listCategory.scrollLeft += diffX;
  startX = currentX;
};

const stopDrag = () => {
  isDragging = false;
  listCategory.classList.remove("scroll-auto");
};

listCategory.addEventListener("mousedown", startDrag);
listCategory.addEventListener("mousemove", drag);
document.addEventListener("mouseup", stopDrag);

listCategory.addEventListener("touchstart", startDrag);
listCategory.addEventListener("touchmove", drag);
document.addEventListener("touchend", stopDrag);

