"strict";
const array = new Array();
const arrayFinal = new Array();
let result = 0;
const textLength = function () {
  let displayLength = document.querySelector(".display").textContent.length;
  return displayLength;
};
const removeEmptyEls = function () {
  for (let i = 0; i < arrayFinal.length; i++) {
    if (arrayFinal[i] === "") {
      arrayFinal.splice(i, 1);
    }
  }
};
const retrieveElements = function () {
  let temporaryVar;
  let count = 0;
  for (let i = 0; i < textLength(); i++) {
    temporaryVar = document.querySelector(".display").textContent.charAt(i);
    if (Number(array[i]) >= 0 && Number(array[i]) <= 9) {
      array[i] = Number(temporaryVar);
      console.log(arrayFinal, "final");
      if (result - Math.floor(result) !== 0) {
        console.log("done");
        arrayFinal[0] = Number(result);
      }
      if (Number(array[i - 1]) >= 0 && Number(array[i - 1]) <= 9) {
        arrayFinal[count] = arrayFinal[count] * 10 + array[i];
      } else {
        arrayFinal[count] = array[i];
      }
      // console.log(array[i]);
      continue;
    }

    array[i] = temporaryVar;

    if (array[i] != ".") {
      count++;
      arrayFinal[count] = array[i];
      //console.log(arrayFinal);
      count++;
    }
  }
  //console.log(arrayFinal);
};

document.querySelector(".c").addEventListener("click", function () {
  document.querySelector(".display").textContent = "";
  arrayFinal.length = 0;
  array.length = 0;
  result = 0;
});
document.querySelector(".plus").addEventListener("click", function () {
  retrieveElements();
  if (
    array[textLength() - 1] != "+" &&
    array[textLength() - 1] != "-" &&
    array[textLength() - 1] != "/" &&
    array[textLength() - 1] != "*" &&
    textLength() > 0 &&
    textLength() < 15
  ) {
    document.querySelector(".display").textContent += "+";
  }
});
document.querySelector(".min").addEventListener("click", function () {
  retrieveElements();
  if (
    array[textLength() - 1] != "+" &&
    array[textLength() - 1] != "-" &&
    array[textLength() - 1] != "/" &&
    array[textLength() - 1] != "*" &&
    textLength() > 0 &&
    textLength() < 15
  ) {
    document.querySelector(".display").textContent += "-";
  }
});
document.querySelector(".mul").addEventListener("click", function () {
  retrieveElements();
  if (
    array[textLength() - 1] != "+" &&
    array[textLength() - 1] != "-" &&
    array[textLength() - 1] != "/" &&
    array[textLength() - 1] != "*" &&
    textLength() > 0 &&
    textLength() < 15
  ) {
    document.querySelector(".display").textContent += "*";
  }
});
document.querySelector(".div").addEventListener("click", function () {
  retrieveElements();
  if (
    array[textLength() - 1] != "+" &&
    array[textLength() - 1] != "-" &&
    array[textLength() - 1] != "/" &&
    array[textLength() - 1] != "*" &&
    textLength() > 0 &&
    textLength() < 15
  ) {
    document.querySelector(".display").textContent += "/";
  }
});
document.querySelector(".zero").addEventListener("click", function () {
  if (textLength() < 15) document.querySelector(".display").textContent += 0;
  retrieveElements();
});
document.querySelector(".one").addEventListener("click", function () {
  if (textLength() < 15) document.querySelector(".display").textContent += 1;
  retrieveElements();
});
document.querySelector(".two").addEventListener("click", function () {
  if (textLength() < 15) document.querySelector(".display").textContent += 2;
  retrieveElements();
});
document.querySelector(".three").addEventListener("click", function () {
  if (textLength() < 15) document.querySelector(".display").textContent += 3;
  retrieveElements();
});
document.querySelector(".four").addEventListener("click", function () {
  if (textLength() < 15) document.querySelector(".display").textContent += 4;
  retrieveElements();
});
document.querySelector(".five").addEventListener("click", function () {
  if (textLength() < 15) document.querySelector(".display").textContent += 5;
  retrieveElements();
});
document.querySelector(".six").addEventListener("click", function () {
  if (textLength() < 15) document.querySelector(".display").textContent += 6;
  retrieveElements();
});
document.querySelector(".seven").addEventListener("click", function () {
  if (textLength() < 15) document.querySelector(".display").textContent += 7;
  retrieveElements();
});
document.querySelector(".eight").addEventListener("click", function () {
  if (textLength() < 15) document.querySelector(".display").textContent += 8;
  retrieveElements();
});
document.querySelector(".nine").addEventListener("click", function () {
  document.querySelector(".display").textContent += 9;
  retrieveElements();
});
document.querySelector(".eq").addEventListener("click", function () {
  retrieveElements();
  if (
    (array[textLength() - 1] === "+" && textLength() != 0) ||
    (array[textLength() - 1] === "-" && textLength() != 0) ||
    (array[textLength() - 1] === "/" && textLength() != 0) ||
    (array[textLength() - 1] === "*" && textLength() != 0)
  ) {
    alert(
      `Wrong input you have used ${
        array[textLength() - 1]
      } as the last element of your function!`
    );
    return;
  } else {
    result = 0;

    // arrayFinal.splice(arrayFinal.length - 1, 1);
    if (typeof arrayFinal[arrayFinal.length - 1] != "number") {
      arrayFinal.splice(arrayFinal.length - 1, 1);
    }
    for (let i = 0; i < arrayFinal.length; i++) {
      if (!arrayFinal[i]) {
        arrayFinal.splice(i, 1);
      }
    }

    while (arrayFinal.length > 1) {
      console.log(result, "result");
      //if it contains * op
      for (let i = 0; i < arrayFinal.length; i++) {
        if (arrayFinal[i] === "*") {
          console.log(arrayFinal[i - 1], arrayFinal[i + 1]);
          result = arrayFinal[i - 1] * arrayFinal[i + 1];
          console.log(arrayFinal, "before");
          arrayFinal.splice(i - 1, 1);
          console.log(arrayFinal, "before");
          arrayFinal.splice(i - 1, 1);
          console.log(arrayFinal, "after");
          arrayFinal[i - 1] = result;
          console.log(arrayFinal, "after");
          console.log("bohet *", result, "index", i);
          i--;
          i--;
          check = result - Math.floor(result) !== 0;
          if (check) {
            let rounded = result.toFixed(1);
            result = rounded;
            arrayFinal[i - 1] = result;
          }
        }
      }
      //if it contains / op
      for (let i = 0; i < arrayFinal.length; i++) {
        if (arrayFinal[i] == "/") {
          result = arrayFinal[i - 1] / arrayFinal[i + 1];
          arrayFinal.splice(i - 1, 1);
          arrayFinal.splice(i - 1, 1);
          arrayFinal[i - 1] = result;
          check = result - Math.floor(result) !== 0;
          if (check) {
            let rounded = result.toFixed(1);
            result = rounded;
            arrayFinal[i - 1] = result;
          }
          console.log("bohet /", result);
          i--;
          i--;
        }
      }
      //if it contains + op
      for (let i = 0; i < arrayFinal.length; i++) {
        if (arrayFinal[i] == "+") {
          result = arrayFinal[i - 1] + arrayFinal[i + 1];
          arrayFinal.splice(i - 1, 1);
          arrayFinal.splice(i - 1, 1);
          arrayFinal[i - 1] = result;
          console.log("bohet +", result);
          i--;
          i--;
        }
      }
      //if it contains - op
      for (let i = 0; i < arrayFinal.length; i++) {
        if (arrayFinal[i] == "-") {
          result = arrayFinal[i - 1] - arrayFinal[i + 1];
          arrayFinal.splice(i - 1, 1);
          arrayFinal.splice(i - 1, 1);
          arrayFinal[i - 1] = result;
          console.log("bohet -", result);
          check = result - Math.floor(result) !== 0;
          if (check) {
            let rounded = result.toFixed(1);
            result = rounded;
            arrayFinal[i - 1] = result;
          }
          i--;
          i--;
        }
      }
    }
    document.querySelector(".display").textContent = result;
    console.log("u bo");
    check = result - Math.floor(result) !== 0;
    if (check) {
      arrayFinal[0] = Number(result);
    } else {
      arrayFinal[0] = result;
    }

    console.log(arrayFinal);
    console.log(typeof arrayFinal[0]);

    console.log(result);
  }
});
