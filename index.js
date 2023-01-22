let arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

// Знайти суму та кількість позитивних елементів.

let result = arr.reduce(function(sum, elem) {
  if (elem >= 0) {
		return sum + elem;
	} else {
		return sum;
	}
});

let resultNum = arr.filter((el, i) => {
  if (el > 0) {
    return el;
  }
})

console.log(resultNum.length, result);

// Знайти добуток позитивних елементів.

let resultMult = arr.reduce(function(mult, elem) {
  if (elem >= 0) {
		return mult * elem;
	} else {
		return mult;
	}
});

console.log(resultMult);

// Визначити кількість негативних елементів.

let resultNegativeNum = arr.filter((el, i) => {
  if (el < 0) {
    return el;
  }
})

console.log(resultNegativeNum.length);

// Знайти мінімальний елемент масиву та його порядковий номер.

let minNumb = arr[0];
let maxNumb = arr[0];
let i = 0;
while (i < arr.length) {
  i++;
  if (minNumb > arr[i]) {
    minNumb = arr[i];
  } else if (maxNumb < arr[i]) {
    maxNumb = arr[i];
  }
}

console.log(minNumb);
console.log(arr.findIndex(el => el === minNumb));

// Знайти максимальний елемент масиву та його порядковий номер.

console.log(maxNumb);
console.log(arr.findIndex(el => el === maxNumb));


// Знайти найбільший серед елементів масиву, ост альні обнулити.

let arrJustBig = arr.map((el) =>{
  if (el === maxNumb)
  return el;
})

console.log(arrJustBig);

// Знайти кількість парних позитивних елементів.
let arrPaired = arr.filter((el, index, selfArr) => {
  if (el > 0) {
    return selfArr.indexOf(el) !== index 
  }
})
console.log(arrPaired.length);

// Знайти суму парних позитивних елементів.

let arrUnPairedPositiv = arrPaired.filter((el, i, arrNew2) => { 
  
  if (el > 0) {
      return arrNew2.indexOf(el) === i;
  }
});

console.log(arrUnPairedPositiv);

let arrForCountPaired = [];

arr.forEach((el) => {
  arrUnPairedPositiv.forEach((el2) => {
    if (el === el2) {
    arrForCountPaired.push(el)
    }
  })
})

console.log(arrForCountPaired);

let arrSumOfPaired = arrForCountPaired.reduce((accum, el) => accum + el, 0); 

console.log(arrSumOfPaired);

// Знайти кількість непарних позитивних елементів.

let arrUnPaired = []; 
function diffArray(arr1, arr2) { 
  let myArrUn = arr1.concat(arr2); 
    arrUnPaired = myArrUn.filter(function(item){ 
      if (item >0) {
        return arr2.indexOf(item) < 0 || arr1.indexOf(item) < 0; 
      }
    });
} 
 
diffArray(arr, arrPaired);
console.log(arrUnPaired.length);

// Знайти суму непарних позитивних елементів.

let arrUnpairedSum = arrUnPaired.reduce((el, item) => el + item)
console.log(arrUnpairedSum);

