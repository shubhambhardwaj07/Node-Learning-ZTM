const http = require("http");

const server = http.createServer((req, res) => {
  //req is readable stream
  //res is a writable stream
  if (req.url === "/") {
    res.writeHead(200, {
      "Content-Type": "application/json",
    });
    res.end(
      JSON.stringify({
        id: 1,
        mesg: "Hello i am from space",
      })
    );
  } else if (req.url === "/message") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<body>");
    res.write("<h1>Hello this is first mesg</h1>");
    res.write("</body>");
    res.write("</html>");
    res.end();
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(3000, () => {
  console.log("listening on port 3000");
}); //127.0.0.1 ==> localhost
