const router = require("express").Router();
const axios = require("axios");
require("dotenv").config();

router.route("/test").get((req, res) => {
  console.log("test works");
  res.send("test works");
});

router.route("/plants").get( function (req, res) {
  console.log(process.env.API_KEY)
  axios
    .get(
      `https://trefle.io/api/v1/plants?token=${process.env.API_KEY}&filter_not[minimum_precipitation_mm]`
    )
    .then(function (response) {
      console.log(response.data.data);
      res.json(response.data.data)
    });
  // Query to get minimum precipitation in mm on a single plant id
  // axios
  //   .get(
  //     "https://trefle.io/api/v1/plants/103505?token=noGOGxi-VCXlxbadxLiVQunEDFVKnGxmlrFJOJmOSjM"
  //   )
  //   .then(function (response) {
  //     console.log(
  //       response.data.data.main_species.growth.minimum_precipitation.mm
  //     );
  //   });
});

module.exports = router;

