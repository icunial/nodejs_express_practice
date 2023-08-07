const EventEmitter = require("events");

const productsEmitter = new EventEmitter();
productsEmitter.on("buy", (total) => {
  console.log(`You have a new buy! $${total}`);
});

productsEmitter.emit("buy", 500);
