const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

function generateKey(arr, num) {
  let textFun = '';
  for (var i = 0; i < num; i++)
    textFun += arr.charAt(Math.floor(Math.random() * arr.length));

  return textFun;
}

const key = generateKey(characters, 16);
console.log(key);


// const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

// function generateKey(arr, num) {
//   let textFun = '';
//   for (var i = 0; i < num; i++)
//     textFun += arr[Math.floor(Math.random() * arr.length)];

//   return textFun;
// }

// const key = generateKey(characters, 16);
// console.log(key);

