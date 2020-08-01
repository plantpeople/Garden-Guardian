const router = require("express").Router();
const axios = require("axios");
require("dotenv").config();

router.route("/testpublic").get((req, res) => {
  res.json("public route works");
});

router.route("/plants/:query").get(function (req, res) {
  const query = req.params.query;
  axios
    .get(
      `https://trefle.io/api/v1/plants/search?token=${process.env.TREFLE_KEY}&q=${query}`
    )
    .then(function (response) {
      console.log(response.data.data);
      res.json(response.data.data);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
