const router = require("express").Router();
const axios = require("axios");
require("dotenv").config();

router.route("/testpublic").get((req, res) => {
  res.json("public route works");
});

router.route("/plants/:query").get(function (req, res) {
  const query = req.params.query;
  console.log(process.env.API_KEY);
  axios
    .get(
      `https://trefle.io/api/v1/plants/search?token=${process.env.TREFLE_KEY}&q=${query}`
    )
    .then(function (response) {
      console.log(response.data.data);
      res.json(response.data.data);
    });
});

router.route("/plants/:query").get(function (req, res) {
  const query = req.params.query;
  console.log(process.env.WEATHER_KEY);
  axios
    .get(
      `https://trefle.io/api/v1/plants/search?token=${process.env.TREFLE_KEY}&q=${query}`
    )
    .then(function (response) {
      console.log(response.data.data);
      res.json(response.data.data);
    });
});

router.route("/weather").get(function (req, res) {
  const zip = req.params.zip_code;
  console.log(process.env.WEATHER_KEY);
  axios
    .get(
    `https://www.zipcodeapi.com/rest/${process.env.ZIP_KEY}/info.json/${zip}/degrees`
    )
    .then(function (response) {
      console.log(response.data.lat);
      console.log(response.data.lng);
      let lat = response.data.lat
      let lon = response.data.lng
      axios
      .get(
      `//api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${WEATHER_KEY}`
      )
      .then(console.log);
    });
});


https:

module.exports = router;
