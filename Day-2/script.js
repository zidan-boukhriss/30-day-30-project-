let result = "";

function ShowNumbersOnScreen() {
  const screen = document.getElementById("current");
  const numbers = document.querySelectorAll(".number");

  numbers.forEach((number) => {
    number.addEventListener("click", function () {
      result += number.dataset.number;
      screen.textContent = result;
    });
  });
}

function DeleteNumberFromScreen() {
  const screen = document.getElementById("current");
  const delete_button = document.getElementById("delete");

  delete_button.onclick = function () {
    if (screen.textContent == "") {
      return;
    }
    if (result) {
      result = result.slice(0, -1);
      screen.textContent = result;
    }
  };
}

function ClearScreen() {
  const clear_button = document.getElementById("clear");
  const screen = document.getElementById("current");
  clear_button.onclick = () => {
    result = "";
    screen.textContent = result;
  };
}

function doMath() {
  const screen = document.getElementById("current");
  const buttons = document.querySelectorAll(".btn-operator-ma");

  buttons.forEach((e) => {
    e.addEventListener("click", function () {
      result = result + e.dataset.operation;
      screen.textContent = result;
    });
  });
}

function showResult() {
  const showResultButton = document.getElementById("equals");
  const screen = document.getElementById("current");
  showResultButton.onclick = () => {
    try {
      result = eval(result);
      screen.textContent = result;
    } catch (e) {
      alert("invalid expression");
    }
  };
}

function tog(){
  document.getElementById('chnger').addEventListener('click' ,
    function(){
      result = -result || result
      document.getElementById('current').textContent =result

    }
  )
}

window.onload = (_) => {
  ShowNumbersOnScreen();
  DeleteNumberFromScreen();
  ClearScreen();
  doMath();
  showResult();
  tog()
};
