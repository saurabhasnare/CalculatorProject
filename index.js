let display = document.getElementById('display');
let resultDisplayed = false;

function appendToDisplay(value) {
    if (resultDisplayed) {
        display.value = '';
        resultDisplayed = false;
    }
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculateResult() {
    try {
        display.value = eval(display.value);
        // Check for NaN or Infinity
        if (!isFinite(display.value)) {
            throw new Error('Invalid operation');
        }
        resultDisplayed = true;
    } catch (error) {
        display.value = 'Error';
    }
}
