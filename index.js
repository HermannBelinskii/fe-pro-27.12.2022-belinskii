function makeSum() {
  let result = 0;
  return function (num) {
    result += num;
    return result;
  };
}; 

let sum = makeSum();

console.log(sum(3));

console.log(sum(5));

console.log(sum(20));