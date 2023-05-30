const express = require("express");

const app = express();

app.all("/", function (req, res) {
  res.send("I am alive!");
});

function keepAlive() {
  app.listen(3000, () => {
    console.log("Running on port 3000");
  });
}

module.exports = keepAlive;
