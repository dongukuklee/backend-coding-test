const express = require("express");
const app = express();
const logger = require("morgan");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger("dev"));
app.use(require("./controllers"));

app.listen(5000, () => {
  console.log("server...");
});
