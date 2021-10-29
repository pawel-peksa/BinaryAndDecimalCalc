import Calculator from "./Calculator";

class DecCalculator extends Calculator {
  constructor(selectorName) {
    super(selectorName);
    this.toolTip = this.$calculatorDOMElement.querySelector(".popover");
  }
  //allow to edit oragne boxes when clicked
  changeNumber(root) {
    root.firstElementChild.setAttribute("contenteditable", "true");
    root.firstElementChild.classList.add("active");
    root.firstElementChild.focus();
  }

  //add numbers in decimal system
  add(numberX, numberY) {
    let result = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = numberX.length - 1; i >= 0; i--) {
      let carryDec = numberX[i] + numberY[i] + result[i];
      if (carryDec > 9) {
        result[i] = carryDec - 10;
        result[i - 1] = 1;
      } else {
        result[i] = carryDec;
      }
    }
    return result;
  }

  formatInvalid(invalid) {
    if (invalid) {
      this.toolTip.lastElementChild.innerText =
        "Wartości muszą być cyframi (0-9)";
      this.toolTip.style.backgroundColor = "#ffe6e6";
    } else {
      this.toolTip.lastElementChild.innerText = "Naciśnij aby dodać wartości";
      this.toolTip.style.backgroundColor = "";
    }
  }

  validateAndFormat() {
    const boxes =
      this.$calculatorDOMElement.querySelectorAll(".display-number");

    //show tooltip when box clicked
    //clear box when clicked
    [...boxes].forEach((box) => {
      box.firstElementChild.addEventListener("click", (e) => {
        this.toolTip.lastElementChild.innerText = "Naciśnij aby dodać wartości";
        this.toolTip.classList.add("show");
        e.currentTarget.innerText = "";
      });
    });

    //allow only one char in the box
    //enter to blur
    [...boxes].forEach((box) => {
      box.addEventListener("keydown", (e) => {
        e.preventDefault();
        if ([0, 1, 2, 3, 4, 5, 6, 7, 8, 9].includes(+e.key)) {
          e.target.innerText = e.key;
          this.formatInvalid(false);
        } else if (e.key === "Enter") {
          e.target.blur();
          this.formatInvalid(false);
        } else {
          e.target.innerText = "";
          this.formatInvalid(true);
        }
      });
    });

    // Put 0 when focusout empty box
    [...boxes].forEach((box) => {
      box.addEventListener("focusout", (e) => {
        if (e.target.innerText === "") {
          e.target.innerText = "0";
          this.formatInvalid(false);
        }
      });
    });
  }

  initEvents() {
    super.initEvents();
    this.validateAndFormat();

    // Run calculator
    this.$calculatorDOMElement
      .querySelector(".operator-bar span")
      .addEventListener("click", () => {
        this.toolTip.classList.remove("show");
        this.checkNumber();
        this.updateResult();
      });
  }
}
export default DecCalculator;
