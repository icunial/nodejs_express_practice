const orderStatus = () => {
  const status = Math.random() < 0.2;
  console.log(status);
  return status;
};

const myOrder = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (orderStatus()) resolve("Order success!");
    else reject("An error happened. Try again!");
  }, 3000);
});

myOrder.then((value) => console.log(value)).catch((err) => console.log(err));
