const http = require("http");

const server = http.createServer((req, res) => {
  // console.log(req); // click refresh
  if (req.url === "/") {
    return res.end("Welcome to our home page");
  }
  if (req.url === "/about") {
    return res.end("Here is our short history");
  }
  res.end(
    `<h1>Ooops!</h1>
    <p>We can't seem to find the page you are looking for.</p>
    <a href="/">Back home</a>`
  );
});

server.listen(8000);
