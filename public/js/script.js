// import { document } from "postcss";

// const { document } = require("postcss");

const bagBtn = document.querySelector('button.nav-bag');
const bagMenu = document.querySelector('.nav-bag-menu');
const bagExitBtn = document.querySelector('.bag-exit');

bagBtn.addEventListener('click', () => {
  bagMenu.classList.remove('-translate-y-full');
  bagMenu.classList.add('-translate-y-0');
});

bagExitBtn.addEventListener('click', () => {
  bagMenu.classList.remove('-translate-y-0');
  bagMenu.classList.add('-translate-y-full');
});


const bagUser = document.getElementsByClassName('nav-bag')

bagUser[0].addEventListener('click', () => {
  console.log('Click')
})

const inputPrice = document.getElementsByClassName('quantity');



class IncrementHandler {
  constructor(inputClass, inputClassValue, outputClass) {
    this.btn = document.getElementsByClassName(inputClass);
    this.output = document.getElementsByClassName(outputClass);
    this.length = inputClassValue;
  }
  increment() {
    for (let i = 0; i < this.length; i++) {
      this.btn[i].addEventListener('click', () => {
        this.output[i].value++;
      });
    }
  }
}
class DecrementHandler {
  constructor(inputClass, inputClassValue, outputClass) {
    this.btn = document.getElementsByClassName(inputClass);
    this.output = document.getElementsByClassName(outputClass);
    this.length = inputClassValue;
  }
  decrement() {
    for (let i = 0; i < this.length; i++) {
      this.btn[i].addEventListener('click', () => {
        if (this.output[i].value > 0) {
          this.output[i].value--;
        } else {
          this.output[i].value = 0;
        }
      });
    }
  }
}



{

const btnPlus = document.getElementsByClassName('btn-plus');
const productItemPlus = new IncrementHandler('btn-plus', btnPlus.length, 'quantity');
productItemPlus.increment();

const btnMinus = document.getElementsByClassName('btn-minus');
const productItemMinus = new DecrementHandler('btn-minus', btnMinus.length, 'quantity');
productItemMinus.decrement();

}

class DragScroll {
  constructor(elementClass) {
    this.listCategory = document.getElementsByClassName(elementClass);
    this.isDragging = false;
    this.startX = 0;

    for (let i = 0; i < this.listCategory.length; i++) {
      this.listCategory[i].addEventListener("mousedown", this.startDrag.bind(this));
      this.listCategory[i].addEventListener("mousemove", this.drag.bind(this));
      document.addEventListener("mouseup", this.stopDrag.bind(this));

      this.listCategory[i].addEventListener("touchstart", this.startDrag.bind(this));
      this.listCategory[i].addEventListener("touchmove", this.drag.bind(this));
      document.addEventListener("touchend", this.stopDrag.bind(this));
    }
  }

  startDrag(e) {
    this.isDragging = true;
    e.currentTarget.classList.add("scroll-auto");
    this.startX = e.clientX || e.touches[0].clientX;
  }

  drag(e) {
    if (!this.isDragging) return;
    const currentX = e.clientX || e.touches[0].clientX;
    const diffX = this.startX - currentX;
    e.currentTarget.scrollLeft += diffX;
    this.startX = currentX;
  }

  stopDrag() {
    this.isDragging = false;
    for (let i = 0; i < this.listCategory.length; i++) {
      this.listCategory[i].classList.remove("scroll-auto");
    }
  }
}

const myDragScrollCategory = new DragScroll("list-category");
const myDragScrollItem = new DragScroll("list-card");




