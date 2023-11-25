// import { document } from "postcss";

// const { document } = require("postcss");

// const priceLocal = 100;
// let input = document.getElementById("numericInput");
// let demand = document.querySelector("h1#result");

// function formatNumberWithCommas(number) {
//   return number.toLocaleString();
// }]

// const cards = document.getElementsByClassName('card');
// const btnPlus = document.getElementsByClassName('btn-plus');
// const btnMinus = document.getElementsByClassName('btn-minus');
// const input = document.getElementsByClassName('inputAmount');


// for (let i = 0; i < btnPlus.length; i++) {
//   let btnPlusIndex = btnPlus[i]

//   btnPlusIndex.addEventListener('onclick', () => {
//     let getInputIndex = input[i]
//     let valueInput = parseInt(getInputIndex.value) || 0;
//     getInputIndex.value = valueInput + 100
//     console.log(getInputIndex)
//   })
  
// }

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

// Membuat instance baru dari class QuantityHandler
const quantityHandler = new QuantityHandler();



  // btnMinus[getIndex].addEventListener('onclick', () => {
  //   decrement()
  // });

  // btnPlus[getIndex].addEventListener('onclick', () => {
  //   increment()
  // });
  // console.log(btnMinus[getIndex])





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

const myDragScroll = new DragScroll("list-category");

// class MyClass {

//   sayWorld() {
//     console.log('Hello World');
//   }

// };

// const example = new MyClass()