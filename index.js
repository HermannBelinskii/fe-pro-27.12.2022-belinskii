let operation = prompt('What mathematical operation should I do(+,-,/,* or add, sub, div, mult)?');

let firstNumber = +prompt('Enter the first number:');

if (isNaN(firstNumber) || firstNumber == "") {
    do {
        alert(`This is not a number! Insert the n-u-m-b-e-r!`);
        firstNumber = +prompt('Enter the first number:');
    } while (isNaN(firstNumber) || firstNumber == "");
}

let secondNumber = +prompt('Enter the second number:');

if (isNaN(secondNumber) || firstNumber == "") {
    do {
        alert(`This is not a number! Insert the n-u-m-b-e-r!`);
        secondNumber = +prompt('Enter the second number:');
    } while (isNaN(secondNumber) || secondNumber == "");
}

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
        default: alert("Invalid math operation, try again!");
    }
};

alert (`Your result is : ${Calculatrice(firstNumber, secondNumber, operation)}`);
