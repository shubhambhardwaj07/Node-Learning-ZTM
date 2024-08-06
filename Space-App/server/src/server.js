const http = require("http");
const app = require("./app");

const PORT = process.env.PORT || 8000;

// This is a better approach when we will use web sockets
const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
