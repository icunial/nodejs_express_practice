const http = require("http");
const courses = require("./courses.js");

const server = http.createServer((req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      return handleGetRequest(req, res);
    case "POST":
      return handlePostRequest(req, res);
    default:
      res.statusCode = 501;
      return res.end(`Method used is not handled by the server: ${method}`);
  }
});

function handleGetRequest(req, res) {
  const path = req.url;

  if (path === "/") {
    res.statusCode = 200;
    return res.end("Welcome to my first server and Api created with Node.js");
  } else if (path === "/courses") {
    res.statusCode = 200;
    res.writeHead(statusCode, { "Content-Type": "applicaction/json" });
    return res.end(JSON.stringify(courses));
  } else if (path === "/courses/coding") {
    res.statusCode = 200;
    res.writeHead(statusCode, { "Content-Type": "applicaction/json" });
    return res.end(JSON.stringify(courses.coding));
  }

  res.statusCode = 404;
  return res.end("The resource does not exist!");
}

function handlePostRequest(req, res) {
  if (req.url === "/courses/coding") {
    res.statusCode = 200;
    return res.end("The server received a POST request for /courses/coding");
  }
}

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
