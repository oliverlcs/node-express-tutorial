// Modules

// CommonJS, every file is a module (by default) // node uses CommonJS under the hood
// Modules - Encapsulated Code (only share minimum)

const names = require("./04-name");
const sayHi = require("./05-utils");
const data = require("./06-alternative-flavor");
require("./07-mind-grenade"); // code of 07-mind-grenade will run, even though we don't store it in a variable. The code will be opened and it will be just invoked.
// console.log(names);
// console.log(data);

// sayHi("Susan");
// sayHi(peter); // error
// sayHi(names.peter);
// sayHi(names.john);
