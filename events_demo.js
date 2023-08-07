const EventEmitter = require("events");

const productsEmitter = new EventEmitter();
productsEmitter.on("buy", () => {
  console.log("You have a new buy!");
});

productsEmitter.emit("buy");
