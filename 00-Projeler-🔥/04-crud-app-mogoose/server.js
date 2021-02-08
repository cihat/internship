const express = require("express");
const log = require("morgan")("dev");
const bodyParser = require("body-parser");

const properties = require("./config/properties");
const db = require("./config/database");
// Hero routes
const herosRoutes = require("./api/heros/heros.routes");
const app = express();

//configure bodyparser
const bodyParserJSON = bodyParser.json();
const bodyParserURLEncoded = bodyParser.urlencoded({ extended: true });

// initialise express route
const router = express.Router();

// call the database connectivity function
db();

// configure app.use()
app.use(log);
app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);

// Error handling
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Origin,Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,Authorization"
  );
  next();
});

// use express router
app.use("/api", router);
// call heros routing
herosRoutes(router);

// initialise server
app.listen(properties.PORT, (req, res) => {
  console.log(`Server is running on ${properties.PORT}`);
});
