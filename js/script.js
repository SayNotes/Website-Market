// class Latihan {

//     constructor(name1, name2){
//         this.firstName = name1
//         this.lastName = name2
//         this.sayHello = function() {
//             console.log(`Hi! My name is ${name1} ${name2}`)
//         }
//         return this.sayHello()
//     }
// }

// const coba = new Latihan('Sultan', 'Faiz');
// console.log(coba)

// class Copy extends Latihan {
// }

// const coba1 = new Copy()
// console.log(coba1)

// const text = "Hello, world!"; // Teks yang ingin ditampilkan
// const typingEffectElement = document.getElementById("typing-effect");
// let index = 0;

// function type() {
//   typingEffectElement.textContent = text.slice(0, index);

//   if (index < text.length) {
//     index++;
//     setTimeout(type, 100); // Waktu penundaan antara setiap karakter
//   }
// }

// type(); // Mulai efek ketikan saat halaman dimuat
const priceLocal = 80;
let input = document.getElementById("numericInput");
let demand = document.querySelector("h1#result");

function formatNumberWithCommas(number) {
    return number.toLocaleString();
};

function increment() {
    input.value = Number(input.value) + 1;
    demand.innerText = "Rp " + formatNumberWithCommas(input.value * priceLocal);
};

function decrement() {
    if (input.value > 0) {
        input.value = Number(input.value) - 1;
    } else if (input.value < 0) {
        input.value = 0;
    };
    demand.innerText = "Rp " + formatNumberWithCommas(input.value * priceLocal);
};

input.addEventListener("input", function () {
    demand.innerText = "Rp " + formatNumberWithCommas(input.value * priceLocal);
});


function buttonClicked() {
    alert("Tombol Submit Ditekan!");
};



class CounterIteratorResult {
    constructor (value, done) {
        this.value = value;
        this.done = done;
    }
}

class CounterIterator {
    constructor (value, max) {
        this.value = value;
        this.max = max;
    }

    next() {
        try {
            if (this.value > this.max) {
                return new CounterIteratorResult(this.value, true);
            } else {
                return new CounterIteratorResult(this.value, false);
            }
        } finally {
            this.value++;
        }
    }
}


// class Counter {
//     constructor (value, done) {
//         this.value = value;
//         this.done = done;
//     }

//     [Symbol.iterator]() {
//         return new CounterIterator(this.value, this.max);
//     }
// }

// const counter = new Counter(1, 10)
// for (const element of counter) {
//     console.info(element);
