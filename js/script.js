const navbar = document.getElementById("search-bar");
const homePage = document.getElementById("home-page");
const popUp = document.getElementById("welcome-user");

function closePopUp() {
  popUp.style.display = 'none';
}

// const priceLocal = 100;
// let input = document.getElementById("numericInput");
// let demand = document.querySelector("h1#result");

// function formatNumberWithCommas(number) {
//   return number.toLocaleString();
// }

// function increment() {
//   input.value = Number(input.value) + 1;
//   if (input.value < 0) {
//     input.value = 0;
//   }
//   demand.innerText = "Rp " + formatNumberWithCommas(input.value * priceLocal);
// }

// function decrement() {
//   if (input.value > 0) {
//     input.value = Number(input.value) - 1;
//   } else if (input.value < 0) {
//     input.value = 0;
//   }
//   demand.innerText = "Rp " + formatNumberWithCommas(input.value * priceLocal);
// }

// input.addEventListener("input", function () {
//   demand.innerText = "Rp " + formatNumberWithCommas(input.value * priceLocal);
// });

function buttonClicked() {
  if (input.value > 0) {
    alert("Pesanan telah masuk");
  } else if (input.value < 0) {
    alert("Pesanan tidak dapat masuk");
  }
}

window.addEventListener("scroll", function () {
  if (window.scrollY > navbar.clientHeight) {
    navbar.classList.add("nav-animation");
    navbar.style.animationName = "fade-in";
    homePage.style.marginTop = `${navbar.clientHeight}px`;
  } else if (window.scrollY <= navbar.clientHeight ){
    navbar.classList.remove("nav-animation");
    homePage.style.marginTop = 0;
  }
});
