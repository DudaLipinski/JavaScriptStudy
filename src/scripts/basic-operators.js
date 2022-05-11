// Study description
// https://dudalipinski.notion.site/Basic-operators-maths-367189a1268a46d48b4a4f3501407439


let a = prompt('First number', '');
let b = prompt('Second number', '');


result = a + b; //Addition
result = a - b; //Subtraction
result = a * b; //Multiplication
result = a / b; //Division
result = a % b; //Remainder
result = a ** b; //Exponentiation

//Concatenation

let userName = "Maria";
let surname = "Lipinski"

alert(userName + " " + surname);

alert( '1' + 2 ); //12
alert( 2 + '1' ); //21

alert(2 + 2 + '1' ); //41 and not 221

//Numeric conversion with unary +

let apples = "2";
let oranges = "3";

alert( apples + oranges ); //23
alert( +apples + +oranges ); // 5

//Modify-in-place

let n = 2;
n = n + 5;
n = n * 2;

n += 5;
n *= 2;

alert(n); // 14

//Increment/decrement

let counter = 0;
alert( ++counter ); //1

let counter = 0;
alert( counter++ ); //0

let counter = 2;
alert( --counter ); //1

let counter = 2;
alert( counter-- ); //2