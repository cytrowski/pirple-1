const http = require("http");
const url = require("url");

const portNumber = process.env.PORT || 3000;
const helloString = process.env.HELLO_STRING || "Hello World";

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname.replace(/^\/|\/+$/g, "");
  const method = req.method.toUpperCase();

  console.log(method, path);
  if (method === "POST" && path === "hello") {
    res.setHeader("ContentType", "application/json");
    res.end(JSON.stringify({ message: helloString }));
    return;
  }
  res.writeHead(404);
  res.end(JSON.stringify({}));
});

server.listen(portNumber, () =>
  console.log(`Server is running at port ${portNumber}`)
);
