import Calculator from "./Calculator";

class DecCalculator extends Calculator {
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

  validateAndFormat() {
    const boxes =
      this.$calculatorDOMElement.querySelectorAll(".display-number");
    const toolTip = this.$calculatorDOMElement.querySelector(".popover");

    //set default text on hidden tooltip
    toolTip.lastElementChild.innerText = "Naciśnij aby dodać wartości";

    //show tooltip when box clicked
    //clear box when clicked
    [...boxes].forEach((box) => {
      box.firstElementChild.addEventListener("click", (e) => {
        toolTip.classList.add("show");
        e.currentTarget.innerText = "";
      });
    });

    //allow only one char in the box
    [...boxes].forEach((box) => {
      box.addEventListener("keydown", (e) => {
        e.preventDefault();
        e.target.innerText = e.key;
      });
    });

    // Not allow to write shit in the boxes
    [...boxes].forEach((box) => {
      box.addEventListener("focusout", (e) => {
        if (![0, 1, 2, 3, 4, 5, 6, 7, 8, 9].includes(+e.target.innerText)) {
          toolTip.lastElementChild.innerText =
            "Wartości muszą być cyframi (0-9)";
          toolTip.style.backgroundColor = "#ffe6e6";
          //edit wrong box
          e.target.style.color = "#450000";
          e.target.focus();
          //hide +
          toolTip.previousElementSibling.style.visibility = "hidden";
        } else {
          // reset style when OK
          toolTip.lastElementChild.innerText = "Naciśnij aby dodać wartości";
          toolTip.style.backgroundColor = "";
          e.target.style.color = "";
          toolTip.previousElementSibling.style.visibility = "";
        }
      });
    });

    // Put 0 when focusout empty box
    [...boxes].forEach((box) => {
      box.addEventListener("focusout", (e) => {
        if (e.target.innerText === "") {
          e.target.innerText = "0";
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
        this.checkNumber();
        this.updateResult();
      });
  }
}
export default DecCalculator;
