function sumAll(...args) {
  let sum = 0;

  for (let arg of args) sum += arg;
  return sum;
}

console.log(sumAll(1, 2, 3, 4));


let arr = [1, 3, 4];
let arr2 = [5, 2, 6, 9];

console.log(Math.max(...arr, ...arr2))


let user = ['Maria', 'Lipinski', 12];

function showName(...user) {
  console.log(user[0]); //Maria
}

showName(...user); //spread syntax
