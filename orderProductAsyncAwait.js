function orderProduct(product) {
  return new Promise((resolve, reject) => {
    console.log(`Ordering: ${product}`);
    setTimeout(() => {
      if (product === `cup`) {
        resolve("Cup Ordered!");
      } else {
        reject("This product is not available now!");
      }
    }, 2000);
  });
}

function processOrder(response) {
  return new Promise((resolve, reject) => {
    console.log("Processing response...");
    console.log(`The response is "${response}"`);
    setTimeout(() => {
      resolve(`Thanks for your buy! Enjoy your product!`);
    }, 4000);
  });
}

orderProduct("cup")
  .then((response) => {
    console.log("Answer received!");
    console.log(response);
    return processOrder(response);
  })
  .then((response) => {
    console.log(response);
  });
