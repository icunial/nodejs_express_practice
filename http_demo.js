const http = require("http");

const server = http.createServer((req, res) => {
  /* console.log("-> REQ");
  console.log(req.url);
  console.log(req.method);
  console.log(req.headers); */

  console.log("-> RES");
  console.log(res.statusCode);
  res.setHeader("content-type", "application/json");
  console.log(res.getHeader());
  res.end("Hello World!");
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
