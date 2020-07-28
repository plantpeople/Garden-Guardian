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

module.exports = router;
