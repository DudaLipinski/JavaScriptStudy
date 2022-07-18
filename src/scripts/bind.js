let c1 = {
  x: 65,
  y: 134,
}

let c2 = {
  x: 93,
  y: 417,
}

function printCoordinates() {
  console.log(this.x + ', ' + this.y);
}

let c1Func = printCoordinates.bind(c1);
let c2Func = printCoordinates.bind(c2);

c1Func();
c2Func();

function askPassword(ok, fail) {
  let password = console.log("Password?", '');
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: 'John',

  loginOk() {
    console.log(`${this.name} logged in`);
  },

  loginFail() {
    console.log(`${this.name} failed to log in`);
  },

}

// askPassword(user.loginOk, user.loginFail); ->
askPassword(user.loginOk.bind(user), user.loginFail.bind(user));


function askPassword(ok, fail) {
  let password = prompt("Password?", '');
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: 'John',

  login(result) {
    prompt( this.name + (result ? ' logged in' : ' failed to log in') );
  }
};

askPassword(user.login.bind(user, true), user.login.bind(user, false) );