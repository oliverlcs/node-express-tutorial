// global, but only in this file available
const secret = "SUPER SECRET";

// global & shared
const john = "john";
const peter = "peter";

// console.log(module); // exports: {}
module.exports = { john, peter };
