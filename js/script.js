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