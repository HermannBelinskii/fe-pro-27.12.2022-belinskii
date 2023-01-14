// 1 

for (let num = 20; num <= 30; num += 0.5) {
  console.log(num);
  continue;
}

// Если числа нужно выводить в один ряд, не до конца понял задание. 
// let result = '';
// for (let num = 20; num <= 30; num = num + 0.5) {
//     result += num + ' ';
// }
// console.log(result.trim());

// 2

for (let curs = 10; curs <= 100; curs++ ) {
  if (curs % 10 == 0) {
    console.log(curs * 27)
    continue;
  }
}

// 3
// Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.

let num4 = +prompt('Введите целое число до 100:');
for (let num5 = 1; num5 <= 100; num5++) {
  let num6 = num5 * num5; {
    if (num6 <= num4) {
      console.log(num6);
    }
  }
}

// 4
// Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).

const num2 = 10;
for (let num3 = 1; num3 <= num2; num3++) {
  for (let num4 = 2; num4 <= num3; num4++) {
    if (num3 % num4 === 0 && num4 < num3) {
      break;
    } else if (num4 === num3) {
      console.log(num3);
    }
  }
}

// Доп. попытался сделать проверку для числа на сложное число или простое. 
// function primeNumb(numPr) {
//   for (let num6 = 2; num6 < numPr; num6++) {
//     if (numPr % num6 == 0) {
//       return "Складне число";
//     }
//   }
//   return "Просте число";
// }
// console.log(primeNumb(2));

// 5
// Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).

let sumeNum = 81;
let result = 1;
for (let counter = 0; counter < 6; counter = counter + 1) {
    result = result * 3; { 
      if (sumeNum === result) {
      console.log("Это число можно получить");
    }
  }
};

