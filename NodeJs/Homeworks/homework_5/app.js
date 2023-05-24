const http = require("http");

const port = 5000;

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h2>Index Page </h2>");
    res.end();
  } else if (url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h2>About Page </h2>");
    res.end();
  } else if (url === "/contact") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h2>Contact Page </h2>");
    res.end();
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write("<h2>Page Not Found </h2>");
    res.end();
  }
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
