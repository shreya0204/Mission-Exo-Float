// The http is added so that aage we can work better in sockets.
const http = require("http");
const app = require("./app.js");
const { loadPlanetsData } = require("./models/planets.model");
const PORT = process.env.PORT || 8000;
const server = http.createServer(app);

async function startSever() {
  await loadPlanetsData();
  server.listen(PORT, (error) => {
    console.log("Listening to PORT : ", PORT, error);
  });
}

startSever();
