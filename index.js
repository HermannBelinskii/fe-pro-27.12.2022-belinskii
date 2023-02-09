// Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

function sumOfNumbersOfArr(array) {
  let sum = 0;
  let count = 0;
  for (let el of array) {
    if(typeof(el) === 'number') {
      sum += el;
      count++;
    }
  }
  return sum / count;
};

let arrNew = [1, 2, 'd', 3, 9, 'f', {}, []]
console.log(sumOfNumbersOfArr(arrNew));

// Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.

function calculatrice(a, b, znak) {
  switch (znak) {
      case '+':
          return a + b;
      case '-':
          return a - b;
      case '/':
          return a / b;
      case '*':
          return a * b;
      case '%':
          return a % b;
      case '^':
          return Math.pow(a, b);
      default: alert("Invalid math operation, try again!");
  }
};

let operation = prompt('What mathematical operation should I do?');
let firstNumber = +prompt('Enter the first number:');
let secondNumber = +prompt('Enter the second number:');
console.log(calculatrice(firstNumber, secondNumber, operation))


// Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.

function cutLetter(string, letter) {
  let stringArr = string.split("");
  let letterArr = letter.split("");
  for(let i = 0; i < stringArr.length; i++) {
      for(let j = 0; j < letterArr.length; j++) {
          if (stringArr[i] === letterArr[j]) {
              stringArr.splice(i, 1);
              i--;
          }
      }
  }
  return stringArr.join("");
}

console.log(cutLetter("hello world", "h,l"))

// Написати функцію заповнення даними користувача двомірного масиву. Довжину основного масиву і внутрішніх масивів задає користувач. Значення всіх елементів всіх масивів задає користувач.

function newArr (weight, inserted, content) {
  const arr = new Array(weight);
    for (let i = 0; i < arr.length; i++) {
      arr[i] = new Array(inserted).fill(content);
    }
  return arr;
}

let arrWeight = +prompt('Введите длину массива:');
let insertedArrWeight = +prompt('Введите длину вложенного массива:');
let contentOfArr = prompt('Введите содержимое массива:');

let result = newArr(arrWeight, insertedArrWeight, contentOfArr);

console.log(result);