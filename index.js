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

// console.log(process.argv); // -> return an array
// console.log(process.argv[2]);

// console.log(process.memoryUsage());

// OS module

/* const os = require("os");

console.log(os.type());
console.log(os.homedir());
console.log(os.uptime());
console.log(os.userInfo()); */

// Timers module
function showTopic(topic) {
  console.log(`I am learning ${topic}`);
}

// setTimeout(showTopic, 1000, "NodeJs");

function sum(a, b) {
  console.log(a + b);
}

// setTimeout(sum, 2000, 1, 2);

setInterval(showTopic, 1000, "NodeJs");
