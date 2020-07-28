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

// Create user route
router.route("/api/users").post(function (req, res) {
  console.log(req.body);

  // Check to see if user exists
  db.User.findOne({
    where: {
      sub: req.body.sub,
    },
  }).then(function (dbUser) {
    // If dbUser does not exist, create user
    if (!dbUser) {
      db.User.create({
        name: req.body.name,
        sub: req.body.sub,
      }).then(function (dbUser) {
        res.json(dbUser);
      });
    }
    res.json(dbUser);
  });

  // If there is a user, send the saved plants
});

module.exports = router;
