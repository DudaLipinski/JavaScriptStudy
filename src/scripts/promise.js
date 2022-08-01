const printResult = (result) => {
  document.getElementById("demo").innerHTML = result;
};

let promise = new Promise(function (resolve, reject) {
  // let num = prompt("Some number", 0);


  // if (num > 0) {
  //   resolve("Valid number");
  // } else {
  //   reject("Invalid number");
  // }

  throw new Error("Whoops!");

});

promise.finally(() => alert("Promise ready"));

promise.then(
  (result) => printResult(result),
  (error) => printResult(error)
);

promise.catch(alert);


let names = ['dudalipinski', 'leo-diehl'];

let requests = names.map(name => fetch(`https://api.github.com/users/${name}`));

Promise.all(requests)
  .then(responses => {
    for (let response of responses) {
      alert(`${response.url}: ${response.status}`);
    }

    return responses;
  })
  .then(responses => Promise.all(responses.map(r => r.json())))
  .then(users => users.forEach(user => alert(user.name)));
