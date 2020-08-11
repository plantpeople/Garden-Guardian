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
      res.json(response.data.data);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/weather/:zip_code").get(function (req, res) {
  const zip = req.params.zip_code;
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${43.06}&lon=${87.91}&appid=${
        process.env.WEATHER_KEY
      }`
    )
    .then((response) => {
      console.log(response.data);
      const weatherArray = [];
      response.data.daily.forEach((element) => {
        weatherArray.push(element.weather[0].main);
      });
      res.json(weatherArray);
    });
  // axios
  //   .get(
  //     `https://www.zipcodeapi.com/rest/${process.env.ZIP_KEY}/info.json/${zip}/degrees`
  //   )
  //   .then(function (response) {
  //     console.log(response.data.lat);
  //     console.log(response.data.lng);
  //     let lat = response.data.lat;
  //     let lon = response.data.lng;
  //     // axios
  //     //   .get(
  //     //     `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${process.env.WEATHER_KEY}`
  //     //   )
  //     //   .then(console.log);
  //   });
});

module.exports = router;
// https://trefle.io//api/v1/plants/daucus-glochidiatus?token=noGOGxi-VCXlxbadxLiVQunEDFVKnGxmlrFJOJmOSjM
