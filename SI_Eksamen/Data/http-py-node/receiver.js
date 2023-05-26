const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/api/endpoint") {
    // Handle the request
    if (req.method === "GET") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Hello from Node.js!");
    } else if (req.method === "POST") {
      let data = "";
      req.on("data", (chunk) => {
        data += chunk;
      });
      req.on("end", () => {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end(`Received data: ${data}`);
      });
    }
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not found");
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Node.js server listening on port ${port}`);
});
