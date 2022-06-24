const http = require("http");

const app = require("./app");

const { mongoConnect } = require("./services/mongo");
const { loadLaunchData } = require("./models/flowers.model");
const { loadDataFlowers } = require("./models/flowers.model");

const PORT = 8000;

const server = http.createServer(app);

async function startServer() {
  await mongoConnect();
  await loadLaunchData();
  await loadDataFlowers();
}

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

startServer();
