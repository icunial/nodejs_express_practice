const myURL = new URL(
  "https://www.example.org/courses/coding?order=views&level=1"
);

console.log(myURL.hostname);
console.log(myURL.pathname);
console.log(myURL.searchParams);
console.log(typeof myURL.searchParams);
console.log(myURL.searchParams.get("order"));
