const promiseResolved = false;

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (promiseResolved) {
      resolve("Promise Resolved!");
    } else {
      reject("Promise Rejected!");
    }
  }, 3000);
});

const resolvedPromiseHandler = (value) => {
  console.log(value);
};

const rejectedPromiseHandler = (reason) => {
  console.log(reason);
};

myPromise.then(resolvedPromiseHandler, rejectedPromiseHandler);
