// import { document } from "postcss";

// const { document } = require("postcss");






const btnBag = document.getElementsByClassName('nav-bag');

btnBag[0].addEventListener('click', () => {
  console.log('Click')
})

const inputPrice = document.getElementsByClassName('quantity');
class NoDecimalInput {
  constructor(inputClass) {
    this.inputs = document.getElementsByClassName(inputClass);
    this.preventNonNumeric();
  }

  preventNonNumeric() {
    for (let i = 0; i < this.inputs.length; i++) {
      this.inputs[i].addEventListener('keydown', function (event) {
        const numericKeys = [
          '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
          'Backspace', 'ArrowLeft', 'ArrowRight', 'Delete',
          'Tab', 'Home', 'End',
        ];
        if (!numericKeys.includes(event.key)) {
          event.preventDefault();
        }
      });
    }
  }
}


const noDecimalInputs = new NoDecimalInput('quantity');



class CounterHandler {
  constructor(btnClass, outputClass, operation) {
    this.btns = document.getElementsByClassName(btnClass);
    this.outputs = document.getElementsByClassName(outputClass);
    this.operation = operation;
  }

  operate() {
    for (let i = 0; i < this.btns.length; i++) {
      this.btns[i].addEventListener('click', () => {
        if (this.operation === 'increment') {
          this.outputs[i].value++;
        } else if (this.operation === 'decrement') {
          if (this.outputs[i].value !== null && !isNaN(this.outputs[i].value)) {
            this.outputs[i].value = Math.max(0, this.outputs[i].value - 1);
          } else {
            this.outputs[i].value = this.outputs[i].value === null ? 0 : this.outputs[i].value;
          }
        }
      });
    }
  }
}

const productItemPlus = new CounterHandler('btn-plus', 'quantity', 'increment');
productItemPlus.operate();
const productItemMinus = new CounterHandler('btn-minus', 'quantity', 'decrement');
productItemMinus.operate();


class DragScrollX {
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

const DragScrollXCategory = new DragScrollX("list-category");
const DragScrollXCart = new DragScrollX("list-card");




