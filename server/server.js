const express = require("express");
const app = express();
const router = require("./Router/router");

const nunjucks = require("nunjucks");

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.use("/", router);

const port = 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
