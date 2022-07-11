let user = {
  name: 'Maria',
  email: 'dudalipinski@hotmail.com',
  location: 'Stockholm',
  blogs: [
    { title: 'bees and flowers', likes: 30 },
    { title: 'cats', likes: 28 }
  ],
  login() {
    console.log('the user logged in');
  },
  logout() {
    console.log('the user logged out');
  },
  logBlogs() {
    // console.log('this user has written the following blogs:');
    this.blogs.forEach(blog => {
      // console.log(blog.title, blog.likes)
    })
  }
}

let age = user?.age;
// console.log(age);


let permissions = {
  admin: 'true',
}

Object.assign(user, permissions);

// console.log(user)
user.logBlogs();


let codes = {
  "49": "Germany",
  "41": "Switzerland",
  "44": "Great Britain",
  // ..,
  "1": "USA"
};

for (let code in codes) {
  // alert(code);
}

let person = {
  name: 'John',
  surname: 'Smith'
}

person.name = 'Pete'
delete person.name;


let schedule = {
  date: 'a',
  hour: 8,

  isEmpty() {
    for (date in schedule) {
      return false;
    }
    return true;
  }

};

console.log(schedule.isEmpty())

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

let sum = 0;

for (let key in salaries) {
  sum += salaries[key]
}
// console.log(sum)

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function multiplyNumeric(menu) {

  for (let key in menu) {
    if (typeof menu[key] === 'number') {
      menu[key] = menu[key] * 2;
    }
    console.log(menu[key])
  }
}

multiplyNumeric(menu);



let calculator = {
  read(){
    // this.a = +prompt('First number', '');
    // this.b = +prompt('Second number', '');
  },

  sum(){
    // return this.a + this.b;
  },

  mul(){
    // return this.a * this.b;
  }
};

calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );


let symbol1 = Symbol('symbol1');
let symbol2 = Symbol('symbol1');

console.log(symbol1 === symbol2);
console.log(typeof symbol1);
console.log('symbol: ' + symbol1.toString());

//symbol use case 1: Symbol as property keys

const MY_KEY = Symbol();
let obj = {};

obj[MY_KEY] = 123;
console.log(obj[MY_KEY]);

// constants representing concepts

let color = ''

const COLOR_RED = Symbol('Red');
const COLOR_YELLOW = Symbol('Yellow');
const COLOR_GREEN = Symbol('Green');

function getComplement(color) {
  switch (color) {
    case COLOR_RED:
      return COLOR_RED;
    case COLOR_GREEN:
      return COLOR_GREEN;
    case COLOR_YELLOW:
      return COLOR_YELLOW;
    default:
    //  alert('Unknown color:' +color);
  }
}

getComplement(color);


let user = {
  name: 'John',
  age: 23,
}

let userKeys = Object.keys(user);
let userValues = Object.values(user);
let userArray = Object.entries(user);

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

let salariesValues = Object.values(salaries);

function sumSalaries(salaries) {
  let sum = 0;

  salaries.forEach(salarie => {
    sum += salarie;
  })

  return sum;
}

console.log(sumSalaries(salariesValues)); // 650
