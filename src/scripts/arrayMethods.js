//Study Description:
//https://dudalipinski.notion.site/Array-methods-2ff465ca93e748968f458a1b830372eb

const numbers = [1, 2, 3, 4];

const deleted = numbers.splice(2, 2, 6, 7);

console.log(numbers); // [1, 2, 6, 7]
console.log(deleted); // [3, 4]


const participants = ['Maria', 'Leo', 'Japa', 'Gui'];
const winners = participants.slice(0, 2);

console.log(participants); //'Maria', 'Leo', 'Japa', 'Gui'
console.log(winners); //'Maria', 'Leo'


const a = [1, 2, 3];
const b = [1, 2, 3];
const c = [1, 2, 3];

const d = a.concat(b, c);
console.log(d); // [1, 2, 3, 1, 2, 3, 1, 2, 3]

let sum = 0;

numbers.forEach(item => {
  sum += item;
})

console.log(sum);

const letters = ['a', 'b', 'c', 'a', 'b'];

let count = {
  a: 2,
  b: 1,
  c: 1,
};

letters.forEach(item => {
  if(count[item]){
    count[item]++;
  } else {
    count[item] = 1;
  }
})


const names = ['Maria', 'Eduarda', 'Leonardo', 'Diehl', 'Maria'];

console.log(names.indexOf('Maria')); //0
console.log(names.lastIndexOf('Maria')); //4
console.log(names.lastIndexOf('Luciane')); // -1


let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"},
  {id: 4, name: "John"}
];

let user = users.find(function (item) {
  return item.id == 3
});

console.log(user.name);
console.log(users.findIndex(user => user.name == 'John')); // 0

const friends = [
  {
    id: 1,
    name: 'leo',
    gender: 'm',
    age: 26,
  },
  {
    id: 2,
    name: 'gui',
    gender: 'm',
    age: 31,
  },
  {
    id: 3,
    name: 'japa',
    gender: 'm',
    age: 36
  },
  {
    id: 4,
    name: 'isa',
    gender: 'f',
    age: 28
  },
  {
    id: 5,
    name: 'silvia',
    gender: 'f',
    age: 36,
  },
]

const findFriend = (callback) => {
  for (let i = 0; i < friends.length; i++) {
    const friend = friends[i]
    const result = callback(friend, i)

    if (result) {
      return friend
    }
  }

  return null
}

const filterFriend = (callback) => {
  const filteredFriends = []

  for (let i = 0; i < friends.length; i++) {
    const friend = friends[i]
    const result = callback(friend, i)

    if (result) {
      filteredFriends.push(friend)
    }
  }

  return filteredFriends
}

const mapFriends = (callback) => {
  const mappedFriends = []

  for (let i = 0; i < friends.length; i++) {
    const friend = friends[i]

    mappedFriends.push(callback(friend, i))
  }

  return mappedFriends
}

const findFriendById = (friend) => {
  return friend.id === 2
}

const reduceFriends = (callback, initialValue) => {
  let accumulator = initialValue

  for (let i = 0; i < friends.length; i++) {
    const friend = friends[i]

    accumulator = callback(accumulator, friend, i, friends)
  }

  return accumulator

  // (accumulator, friend) => {
  //   return {
  //     ...accumulator,
  //     [friend.name]: friend.age,
  //   }
  // },
  // {},
}

console.log("--- friends 1 ---") // [XXX] REMOVE BEFORE COMMITING
console.log(friends) // [XXX] REMOVE BEFORE COMMITING

const isa = friends.find(friend => friend.name === 'isa')
console.log("--- isa ---") // [XXX] REMOVE BEFORE COMMITING
console.log(isa) // [XXX] REMOVE BEFORE COMMITING

const femaleFriends = friends.filter((friend) => friend.gender === 'f')
console.log("--- femaleFriends ---") // [XXX] REMOVE BEFORE COMMITING
console.log(femaleFriends) // [XXX] REMOVE BEFORE COMMITING

// sempre retorna array de mesmo tamanho
const mappedFriends = friends.map((friend, index) => {
  return {
    index: index,
    name: friend.name.toUpperCase(),
    gender: friend.gender === 'm' ? 'macho' : 'femea'
  }
})
console.log("--- mappedFriends ---") // [XXX] REMOVE BEFORE COMMITING
console.log(mappedFriends) // [XXX] REMOVE BEFORE COMMITING

const friendsAgeObject = reduceFriends(
  (accumulator, friend, index, friends) => {
    return {
      ...accumulator,
      [friend.name]: friend.age,
    }
  },
  {},
)
console.log("--- JSON.stringify(friendsAgeObject, null, 2) ---") // [XXX] REMOVE BEFORE COMMITING
console.log(JSON.stringify(friendsAgeObject, null, 2)) // [XXX] REMOVE BEFORE COMMITING

console.log("--- Array.isArray(friends) ---") // [XXX] REMOVE BEFORE COMMITING
console.log(Array.isArray(friends)) // [XXX] REMOVE BEFORE COMMITING
