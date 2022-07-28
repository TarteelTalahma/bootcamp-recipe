const express = require("express");
const path = require("path");
//const urllib = require("urllib");
const axios = require("axios");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "dist")));
app.use(express.static(path.join(__dirname, "node_modules")));
let recipes = {
  recipesSpecific: {},
};
app.get("/recipes/:ingredient", (req, result) => {
  let param = req.params.ingredient;
  axios
    .get(`https://recipes-goodness.herokuapp.com/recipes/${param}`)
    .then((res) => {
      recipes.recipesSpecific = res.data.results;
      result.send(recipes.recipesSpecific);
    });
});

app.get("/sanity", function (req, res) {
  res.send("ok");
});
const port = 8080;
app.listen(port, function () {
  console.log("Server is run in port " + port);
});
