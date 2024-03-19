let display = document.getElementById('display');
let buttons = document.querySelectorAll('.keys button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    let value = button.textContent.trim();
    if (value === 'C') {
      clearDisplay();
    } else if (value === '(') {
      value = '*(';
      appendToDisplay(value);
    } else {
      appendToDisplay(value);
    }
  });
});

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}
function backspace() {
  let currentValue = display.value;
  display.value = currentValue.slice(0, -1);
}

function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}
