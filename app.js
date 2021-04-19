const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");

const app = express();
const port = 3000;

const listOfLists = [];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));

app.get("/", function(req, res) {
  res.render("index", {listOfLists: listOfLists});
})

app.post("/", function(req, res) {
  let newList = req.body.newList;

  listOfLists.push(newList);

  res.redirect("/");
});

app.listen(port, function(req, res) {
  console.log("Server started on port " + port);
});
