/* const { greeting, greetingHelloWorld } = require("./greeting");

console.log(greeting("freeCodeCamp"));
console.log(greetingHelloWorld()); */

// Console module

/* console.log("Hello, World!");
console.warn("An error occured...");
console.error("Error!");
console.error(new Error("An error happened!")); */

// Process module

// console.log(process);
// console.log(process.env);

// Access to terminal arguments

console.log(process.argv); // -> return an array
console.log(process.argv[2]);

console.log(process.memoryUsage());
