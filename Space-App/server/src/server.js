const http = require("http");
const app = require("./app");

const { loadPlanetsData } = require("./models/planets.model");

const PORT = process.env.PORT || 8000;

// This is a better approach when we will use web sockets
const server = http.createServer(app);

async function startServer() {
  // This is basically to always make sure we load the initially the data for first call
  // when we have streams of data
  await loadPlanetsData();
  server.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
  });
}

startServer();
