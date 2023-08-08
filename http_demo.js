const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello World!");
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
