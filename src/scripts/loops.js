const users = [
  {userName : 'Maria', userId : 1},
  {userName : 'Eduarda', userId : 2},
  {userName : 'Lipinski', userId : 3},
];


//for
for (let i = 0; i < users.length; i++) {
  console.log([users[i].userName])
}

//for of
for (const element of users){
  console.log(element.userName);
}

//forEach
users.forEach((user) => {
  console.log(user)
});


//for in
const someObject = {a: 1, b: 2, c: 3};

for (const propertyName in someObject){
  console.log(`${propertyName}: ${someObject[propertyName]}`)
}

//while
let count = 0;

while (count < 5){
  console.log('Inside the while');
  count++;
}

//Write a JS code to print numbers from 1 to 10
for (count = 1; count <= 100; count++){
  console.log(count)
}