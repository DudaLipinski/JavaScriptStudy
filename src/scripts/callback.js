//with callback
let num1 = prompt('First number');
let num2 = prompt('Second number');


const printResult = (result) => {
  document.getElementById("demo").innerHTML = result;
  console.log(result)
}

// const calcSum = (num1, num2, callback) => {
//   let sum = num1 + num2;
//   callback(sum);
// }

// calcSum(+num1, +num2, printResult);

//with promise
const getSum = (num1, num2, callback) => {
  if (!num1 || !num2) {
    return callback(new Error("Missing arguments"), null);
  }
  return callback(null, +num1 + +num2);
};

getSum(num1, num2, (err, result) => {
  if (err) {
    printResult(err);
  } else {
    printResult(result);
  }
});