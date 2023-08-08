const http = require("http");
const courses = require("./courses.js");

const server = http.createServer((req, res) => {
  res.end("");
});

const PORT = process.env.PORT || 5000;

server.listen(`Server is listening on port: ${PORT}`);
