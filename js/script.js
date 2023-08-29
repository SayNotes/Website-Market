const priceLocal = 100;
let input = document.getElementById("numericInput");
let demand = document.querySelector("h1#result");

function formatNumberWithCommas(number) {
    return number.toLocaleString();
};

function increment() {
    input.value = Number(input.value) + 1;
    if (input.value < 0) {
        input.value = 0
    };
    demand.innerText = "Rp " + formatNumberWithCommas(input.value * priceLocal);
};

function decrement() {
    if (input.value > 0) {
        input.value = Number(input.value) - 1
    } else if (input.value < 0) {
        input.value = 0
    };
    demand.innerText = "Rp " + formatNumberWithCommas(input.value * priceLocal);
};

input.addEventListener("input", function () {
    demand.innerText = "Rp " + formatNumberWithCommas(input.value * priceLocal);
});


function buttonClicked() {
    if (input.value > 0) {
        alert("Pesanan telah masuk");
    } else if (input.value < 0) {
        alert("Pesanan tidak dapat masuk");
    }
};

const navBar = document.getElementById("nav");
const homePage = document.getElementById("home-page");
const heightNavbar = navBar.clientHeight;

window.addEventListener("scroll", function() {

    if (window.scrollY > heightNavbar) {
        navBar.style.position = "fixed";
        navBar.style.top = 0;
        navBar.style.left = 0;
        navBar.style.zIndex = 999;
        navBar.style.animationName = "upToDown";
        navBar.style.animationDuration = "300ms";
        navBar.style.animationTimingFunction = "ease in";
        homePage.style.marginTop = `${heightNavbar}px`
    } else {
        navBar.style.position = "static";
        navBar.style.animation = "";
        homePage.style.marginTop = 0;
    }
});