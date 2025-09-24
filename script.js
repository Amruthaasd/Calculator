const display = document.getElementById('display');
let currentExpression = '';

function appendCharacter(char) {
    if (currentExpression === '0' && char !== '.') {
        currentExpression = '';
    }
    currentExpression += char;
    display.textContent = currentExpression;
}

function clearDisplay() {
    currentExpression = '0';
    display.textContent = currentExpression;
}

function deleteLast() {
    currentExpression = currentExpression.slice(0, -1);
    if (currentExpression === '') {
        currentExpression = '0';
    }
    display.textContent = currentExpression;
}

function calculateResult() {
    try {
        const result = eval(currentExpression);
        display.textContent = result;
        currentExpression = result.toString();
    } catch (error) {
        display.textContent = 'Error';
        currentExpression = '0';
    }
}