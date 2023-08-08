const http = require("http");
const courses = require("./courses.js");

const server = http.createServer((req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      return handleGetRequest(req, res);
    default:
      console.log(`Method used is not handled by the server: ${method}`);
  }
});

function handleGetRequest(req, res) {
  const path = req.url;

  if (path === "/") {
    res.statusCode = 200;
    res.end("Welcome to my first server and Api created with Node.js");
  } else if (path === "/courses") {
    res.statusCode = 200;
    res.end(JSON.stringify(courses));
  } else if (path === "/courses/coding") {
    res.statusCode = 200;
    res.end(JSON.stringify(courses.coding));
  }

  res.statusCode = 404;
  res.end("The resource does not exist!");
}

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
