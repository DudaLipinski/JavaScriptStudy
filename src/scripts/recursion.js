function factorial(n){
  if(n == 1 || n == 0) {
    return 1;
  } else {
    return n * factorial(n-1);
  }
}

// console.log(factorial(4))

//Write a function sumTo(n) that calculates the sum of numbers 1 + 2 + ... + n.

function sum(n){
  if (n < 1) {
    return 0;
  } else {
    return n + sum(n-1);
  }
}

// console.log(sum(3))

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printList(list) {
  while (list) {
    console.log(list.value);
    list = list.next;
  }
}

function printRecursionList(list){
  console.log(list.value); // output the current item

  if (list.next) {
    printRecursionList(list.next); // do the same for the rest of the list
  }
}

printList(list)
printRecursionList(list)