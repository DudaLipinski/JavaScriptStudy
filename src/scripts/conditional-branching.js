// Study description
// https://dudalipinski.notion.site/Conditional-branching-if-2f904accbebe4cb18580b05bc72f6435

let year = prompt("put a year", "");

if (year == 2000) {
  alert("You are right!");
} else if (year > 2000) {
  alert("Too late");
} else if (year < 2000) {
  alert("Too early");
} else {
  alert("What an unusual year!");
}

//==

let message =
  year == 2000
    ? "You are right"
    : year > 2000
    ? "Too late"
    : year < 2000
    ? "Too early"
    : "What an unusual year!";

alert(message);

// Rewrite this if using the conditional operator '?':

let result;

if (a + b < 4) {
  result = "Below";
} else {
  result = "Over";
}

let result = a + b < 4 ? "Below" : "Over";

// Rewrite this if using the conditional operator '?':

let message;
let login = prompt("Login", "");

if (login == "Employee") {
  message = "Hello";
} else if (login == "Director") {
  message = "Greetings";
} else if (login == "") {
  message = "No login";
} else {
  message = "";
}

let message =
  login == "Employee"
    ? "Hello"
    : login == "Director"
    ? "Greetings"
    : login == ""
    ? "No login"
    : "";
