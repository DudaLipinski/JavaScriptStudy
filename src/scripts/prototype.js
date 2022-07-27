let animal = {
  walk() {
    if (!this.isSleeping) {
      alert(`I walk`);
    }
  },
  sleep() {
    this.isSleeping = true;
  }
};

let rabbit = {
  name: "White Rabbit",
  __proto__: animal
};

// modifies rabbit.isSleeping
rabbit.sleep();
animal.sleep();

alert(rabbit.isSleeping); // true
alert(animal.isSleeping)


let head = {
  glasses: 1,
};

let table = {
  pen: 3,
  __proto__: head,
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table,

};

let pockets = {
  money: 2000,
  __proto__: bed,
};

alert(pockets.glasses);
alert(head.glasses);


let hamster = {
  stomach: [],

  eat(food) {
    // this.stomach.push(food); ->
    this.stomach = [food];
  }
};

let speedy = {
  __proto__: hamster
};

let lazy = {
  __proto__: hamster
};

speedy.eat("apple");
alert(speedy.stomach); // apple

alert(lazy.stomach); //


f.prototypal

let animal = {
  eats: true
};

console.log(animal)

function Rabbit(name) {
  this.name = name;
}

console.log(Rabbit)

let rabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal

console.log(rabbit)
alert( rabbit.eats ); // true




//constructor
function Cat(name) {
  this.name = name;
}

let animal = {
  legs: 4,
}

Cat.prototype = animal;

let ioga = new Cat("Ioga");
let nanquim = new Cat("Nanquim");


console.log(Cat);

console.log(ioga);
console.log(nanquim);