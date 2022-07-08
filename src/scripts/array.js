let arr = ["Apple", "Orange", "Plum", 2, 3];

console.log(arr.length)
console.log(arr.pop()) //return last item and remove it
console.log(arr.push("Pear")) // add element to the end

console.log(arr.shift()) //return first item and remove it
console.log(arr2.unshift('Teste')) //add element to the beggining


for (let key in arr){
  console.log(arr[key]);
}

let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll")

let stylesLenght = styles.length;

stylesMiddle = stylesLenght / 2;
stylesMiddle = Math.floor(stylesMiddle);
styles[stylesMiddle] = "Classics";
styles.shift()
styles.unshift("Rap", "Raggae");

console.log(styles)

function sumInput(){
  const value = [];

  while (true) {
    const input = prompt("Add a number", '');
    const number = parseInt(input)

    if (Number.isNaN(number)) {
      break;
    }

    value.push(number);

  }

  let sum = 0;
  for(number of value){
    sum += number;
  }

  return sum;
}

alert(sumInput())