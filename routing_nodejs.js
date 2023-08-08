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
  }
}

const PORT = process.env.PORT || 5000;

server.listen(`Server is listening on port: ${PORT}`);
