const express = require("express");
const bodyParser = require("body-parser");
const router = require("./routes/index");

// express uygulamayı kurun
const app = express();

// Gelen request(istek) verilerini ayrıştırın
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
