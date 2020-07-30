var db = require("../models");

const router = require("express").Router();
const axios = require("axios");
require("dotenv").config();

router.route("/testprivate").get((req, res) => {
  res.json("private route works");
});

router.route("/plants/:query").get(function (req, res) {
  const query = req.params.query;
  console.log(process.env.API_KEY);
  axios
    .get(
      `https://trefle.io/api/v1/plants/search?token=${process.env.API_KEY}&q=${query}`
    )
    .then(function (response) {
      console.log(response.data.data);
      res.json(response.data.data);
    });
});

router.route("/api/users").post(function(req, res) {
  console.log(req.body);
  // create takes an argument of an object describing the item we want to
  // insert into our table. In this case we just we pass in an object with a text
  // and complete property (req.body)
  db.User.create({
    name: req.body.name,
    sub: req.body.sub
  }).then(function(dbUser) {
    // We have access to the new todo as an argument inside of the callback function
    res.json(dbUser);
  });
})
;


module.exports = router;
