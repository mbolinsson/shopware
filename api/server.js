const http = require("http");
const port = process.env.port || 3300;
const app = require("./app");
const mongoose = require("mongoose");

const serverUri = "http://localhost:" + port;
const mongoUri = "mongodb+srv://Marcus:sewdsewd77@cluster0-pdph1.mongodb.net/shopware-db?retryWrites=true&w=majority";

http.createServer(app).listen(port, () => console.log("LOADING WEBSERVER: " + serverUri));
mongoose
  .set("useCreateIndex", true)
  .connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("WE ARE LIVE!"))
  .catch((err) => console.log(err));
