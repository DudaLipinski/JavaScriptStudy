import User, {printName, printAge} from '/src/scripts/module-export.js';

const user = new User('Duda', 23);

printName(user);
printAge(user);
