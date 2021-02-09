const express = require("express");
const bodyParser = require("body-parser");
// Configuring the database
const dbConfig = require("./config/database.config");
const mongoose = require("mongoose");

// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());

mongoose.Promise = global.Promise;

// Connection to the database
mongoose
  .connect(dbConfig.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch((err) => {
    console.log("Could not connect to the database. Exiting now...");
    process.exit();
  });

// define a simple route
app.get("/", (req, res) => {
  res.json({
    message:
      "Welcome to EasyNtes application. Take notes quickly. Organize and keep track of all your notes",
  });
});

// Require Notes routes
require("./app/routes/note.routes.js")(app);

// listen for requests
app.listen(dbConfig.PORT, () => {
  console.log(`Server is listening on port ${dbConfig.PORT}`);
});
