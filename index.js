const array = [1, 2, 3, 4, 5, 6, 7];

function removeElement (arr, item) {
  return arr.filter(function(el) {
      return el !== item;
  })
}

console.log(removeElement(array, 5));


// const array = [1, 2, 3, 4, 5, 6, 7];

// function removeElement (arr, item) {
//   return arr.filter(el => el !== item)
// }

// console.log(removeElement(array, 5));