//Rewrite the function using '?' or '||'

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Did parents allow you?');
  }
}

function checkAge(age) {
  return (age > 18) ? true : confirm('Did parents allow you?')
}

function checkAge(age) {
  return (age > 18) || confirm('Did parents allow you?');
}

// Write a function min(a,b) which returns the least of two numbers a and b.

let a = -5;
let b = -1;

function checkLeastNumber(a, b) {
  return (a > b) ? b : a;
}

function showLeastNumber(num) {
  alert(num)
}

let result = checkLeastNumber(a, b)
showLeastNumber(result)

// Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.

let num = 7;
let multilple = 2;

function getPow(num, multiple) {
  return Math.pow(num, multilple)
}

function showPow(pow) {
  alert(pow);
}

let pow = getPow(num, multilple);
showPow(pow);



//Replace Function Expressions with arrow functions in the code below:
function askExpression(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

askExpression(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);


let askArrow = (question, yes, no) => {
  confirm(question) ? yes() : no();
}

askArrow("Do you agree?",
  () => {alert("You agreed")},
  () => {alert("You canceled the execution.")}
)