// import { document } from "postcss";

// const { document } = require("postcss");

// const priceLocal = 100;
// let input = document.getElementById("numericInput");
// let demand = document.querySelector("h1#result");

// function formatNumberWithCommas(number) {
//   return number.toLocaleString();
// }]

const bagUser = document.getElementsByClassName('nav-bag')

bagUser[0].addEventListener('click', () => {
  console.log('Click')
})

const inputPrice = document.getElementsByClassName('quantity');
const plusBtn = document.getElementsByClassName('btn-plus');

class IncrementHandler {
  constructor(inputClass, outputClass) {
    this.plusBtn = document.getElementsByClassName(inputClass);
    this.quantityInput = document.getElementsByClassName(outputClass)
  }
  increment() {
    console.log(this.plusBtn.length)
  }
}

const tester = new IncrementHandler('plus-btn', 'quantity')

// for (let i = 0; i < plusBtn.length; i++) {
//   plusBtn[i].addEventListener('click', () => {
//     inputPrice[i].value++
//   });
// }
// const cards = document.getElementsByClassName('card');
// const btnPlus = document.getElementsByClassName('btn-plus');
// const btnMinus = document.getElementsByClassName('btn-minus');

// const btnAddBag = document.getElementsByClassName('btn-submit');

// btnAddBag[0].addEventListener('click', () => {
//   const inputValue = inputPrice[0].value.trim(); // Menghapus spasi di awal dan akhir input

//   if (inputValue === '' || inputValue.includes('.') || isNaN(inputValue) || parseInt(inputValue) <= 0) {
//     alert('Pesanan harus berupa bilangan bulat positif');
//   } else {
//     alert(`Total item ${parseInt(inputValue)} telah masuk`);
//   }
// });


class DragScroll {
  constructor(elementId) {
    this.listCategory = document.getElementById(elementId);
    this.isDragging = false;
    this.startX = 0;

    this.listCategory.addEventListener("mousedown", this.startDrag.bind(this));
    this.listCategory.addEventListener("mousemove", this.drag.bind(this));
    document.addEventListener("mouseup", this.stopDrag.bind(this));

    this.listCategory.addEventListener("touchstart", this.startDrag.bind(this));
    this.listCategory.addEventListener("touchmove", this.drag.bind(this));
    document.addEventListener("touchend", this.stopDrag.bind(this));
  }

  startDrag(e) {
    this.isDragging = true;
    this.listCategory.classList.add("scroll-auto");
    this.startX = e.clientX || e.touches[0].clientX;
  }

  drag(e) {
    if (!this.isDragging) return;
    const currentX = e.clientX || e.touches[0].clientX;
    const diffX = this.startX - currentX;
    this.listCategory.scrollLeft += diffX;
    this.startX = currentX;
  }

  stopDrag() {
    this.isDragging = false;
    this.listCategory.classList.remove("scroll-auto");
  }
}

const myDragScrollCategory = new DragScroll("list-category");
const myDragScrollItem = new DragScroll("list-card");


class QuantityHandler {
  constructor() {
      this.decrementBtn = document.querySelector('.btn-minus');
      this.incrementBtn = document.querySelector('.btn-plus');
      this.quantityInput = document.getElementsById('quantity');

      this.decrementBtn.addEventListener('click', this.decrement.bind(this));
      this.incrementBtn.addEventListener('click', this.increment.bind(this));
      this.quantityInput.addEventListener('input', this.checkInput.bind(this));
  }

  decrement() {
      let currentValue = parseInt(this.quantityInput.value);
      if (currentValue > 0) {
          this.quantityInput.value = currentValue - 10; // Decrease by 10 or any desired step
      }
  }

  increment() {
      let currentValue = parseInt(this.quantityInput.value);
      this.quantityInput.value = currentValue + 10; // Increase by 10 or any desired step
  }

  checkInput() {
      if (this.quantityInput.value < 0 || this.quantityInput.value === '') {
          this.quantityInput.value = 0;
      }
  }
}
const quantityHandler = new QuantityHandler();



  // btnMinus[getIndex].addEventListener('onclick', () => {
  //   decrement()
  // });

  // btnPlus[getIndex].addEventListener('onclick', () => {
  //   increment()
  // });
  // console.log(btnMinus[getIndex])





// function buttonClicked() {
//   alert(`Pesanan senilai Rp.${input.inputAmount.value} telah masuk`)
// };