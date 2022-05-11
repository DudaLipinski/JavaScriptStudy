// Study description
// https://dudalipinski.notion.site/Type-Conversions-c9fc23b35cdd4852bd8fbcbe33864072

//String conversion
let value = true;
alert(typeof value); //boolean

value = String(value);
alert(typeof value); //string

//Numeric conversion
let a = "5";
let b = "10";

let sum = a / b; //converts automatically for a number
let sum = a + b; //doesn't convert, the result is: 510. Read more in Basic operators and maths.

let str = "123";
alert(typeof str); // string

let num = Number(str); // becomes a number 123
alert(typeof num); // number

//Boolean conversion
alert(Boolean(1)); // true
alert(Boolean(0)); // false

alert(Boolean("hello")); // true
alert(Boolean("")); // false

alert(Boolean("0")); // true
alert(Boolean(" ")); // spaces, also true (any non-empty string is true)
