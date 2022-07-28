let num1 = prompt('First number');
let num2 = prompt('Second number');


const printResult = (result) => {
  document.getElementById("demo").innerHTML = result;
}

const calcSum = (num1, num2, callback) => {
  let sum = num1 + num2;
  callback(sum);
}

const calcDivision = (num1, num2, callback) => {
  let division = num1 - num2;
  callback(division);
}

calcSum(+num1, +num2, printResult);
calcDivision(+num1, +num2, printResult);