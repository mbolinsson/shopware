const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const config = require("./config");
const session = require("express-session");

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type, Accept, Authorization, Origin, X-Requested-With, x-access-token");
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, PATCH, DELETE");
  }
  next();
});

// Express Session
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// authentication
app.use((req, res, next) => {
  const token = req.headers["x-access-token"];
  req.user = {
    isAuthenticated: false,
    id: null,
  };

  jwt.verify(token, config.secret, function (err, decoded) {
    if (decoded) {
      req.user.isAuthenticated = true;
      req.user.id = decoded.id;
    }
    next();
  });
});

//CONTROLLERS
app.use("/api/users", require("./controllers/usersController"));
app.use("/api/products", require("./controllers/productsController"));

module.exports = app;
