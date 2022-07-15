function sayHi() {
  console.log('Hello');
}

setTimeout(sayHi, 1000);

//with parameters
function sayBye(phrase, who) {
  console.log(phrase + ', ' + who);
}

setTimeout(sayBye, 1000, "Bye", "John");

//if first parameters is a string, use arrow functions
setTimeout(() => console.log('Hello'), 1000);

//setInterval runs regularly after the given interval of time
// setInterval(() => console.log('Olá'), 1000);

// repeat with the interval of 2 seconds
let timerId = setInterval(() => console.log('tick'), 2000);

// after 5 seconds stop
setTimeout(() => { clearInterval(timerId); console.log('stop'); }, 5000);