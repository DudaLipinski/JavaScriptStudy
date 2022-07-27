class Clock {
  constructor({ template }) {
    this.template = template;
  }

  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = "0" + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = "0" + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = "0" + secs;

    let output = this.template
      .replace("h", hours)
      .replace("m", mins)
      .replace("s", secs);

    // console.log(output);
  }

  stop() {
    clearInterval(this.timer);
  };

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  };
}

let clock = new Clock({ template: 'h:m:s' });
// clock.start();

//basic Class
class Rectangle {
  constructor(_width, _height, _color) {
    this.width = _width;
    this.height = _height;
    this.color = _color;
  }

  getArea(){
    return this.width * this.height;
  }

  printRectangle(){
    console.log(`I am a rectangle of ${this.width} 'x' ${this.height}, and I am ${this.color}`);
  }
}

let myRectangle1 = new Rectangle(10, 2, "blue");
let myRectangle2 = new Rectangle(3, 4, "red");

// console.log(myRectangle1.getArea());
// console.log(myRectangle1.printRectangle());

//Get, Set and Static Methods
class Square {
  constructor (_width) {
    this.width = _width;
    this.height = _width;
    this.numOfRequestForArea = 0;
  }

  get area(){
    this.numOfRequestForArea++;
    return this.width * this.height;
  }

  set area(area) {
    this.width = Math.sqrt(area);
    this.height = this.width;
  }

  static equals (a, b) {
    return a.width * a.height === b.width * b.height;
  }
}

let square1 = new Square(2);
let square2 = new Square(3);
square1.area = 25;

console.log(square1.width);
console.log(square1.height);
console.log(square1.area);

console.log(Square.equals(square1, square2));

//Inheritance and Extends

class Person {
  constructor(_name, _age) {
    this.name = _name;
    this.age = _age;
  }

  describe() {
    console.log('I am ' + this.name);
  }
}

class Programmer extends Person {
  constructor(_name, _age, _languageOfProgramming) {
    super(_name, _age);

    this.languageOfProgramming = _languageOfProgramming;
  }

  code(){
    console.log(`I am ${this.name}, and I programming in ${this.languageOfProgramming}`);
  }
}

let programmer1 = new Programmer("Duda", 23, 'JavaScript');

const programmers = [
  new Programmer("Diehl", 26, "JavaScript"),
  new Programmer("Duda", 23, "JavaScript"),
];


function developSoftware(programmers) {
  for(let programmer of programmers){
    programmer.code();
  }
}

developSoftware(programmers);