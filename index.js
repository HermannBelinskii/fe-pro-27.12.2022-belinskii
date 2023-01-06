let operation = prompt('What mathematical operation should I do(+,-,/,* or add, sub, div, mult)?')
let firstNumber = +prompt('Enter the first number:')
let secondNumber = +prompt('Enter the second number:')

function Calculatrice(firstNumber, secondNumber, operation) {
    switch (operation) {
        case '+':
            return firstNumber + secondNumber;
            break;
        case 'add':
            return firstNumber + secondNumber;
            break;
        case '-':
            return firstNumber - secondNumber;
            break;
        case 'sub':
            return firstNumber - secondNumber;
            break;
        case '/':
            return firstNumber / secondNumber;
            break;
        case 'div':
            return firstNumber / secondNumber;
            break;
        case '*':
            return firstNumber * secondNumber;
            break;
        case 'mult':
            return firstNumber * secondNumber;
            break;
    }
};

alert (`Result is : ${Calculatrice(firstNumber, secondNumber, operation)}`);
