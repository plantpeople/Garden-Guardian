var db = require("../models");

const router = require("express").Router();
const axios = require("axios");
require("dotenv").config();

router.route("/testprivate").get((req, res) => {
  res.json("private route works");
});

router.route("/plants/:query").get(function (req, res) {
  const query = req.params.query;

  axios
    .get(
      `https://trefle.io/api/v1/plants/search?token=${process.env.API_KEY}&q=${query}`
    )
    .then(function (response) {
      res.json(response.data.data);
    });
});

router.route("/api/user").post(function (req, res) {
  console.log(req.body, "api/user/req.body");
  db.User.findOne({
    where: {
      sub: req.body.sub,
    },
  }).then(function (dbUser) {
    // console.log(dbUser, "DBUSER");
    if (!dbUser) {
      console.log("db user doesn't exist");
      db.User.create({
        name: req.body.name,
        sub: req.body.sub,
      }).then(function (dbUser) {
        dbUser.dataValues.plants = [];
        res.json(dbUser);
      });
    } else {
      console.log("db user exists");
      db.Plant.findAll({ where: { UserId: dbUser.id } }).then((plants) => {
        console.log("PLANTS");
        console.log(plants);
        dbUser.dataValues.plants = plants.map((p) => p.dataValues);
        res.json(dbUser);
        // res.json("hello");
      });
    }
  });
});

//this will completely remove from being associated w/ user, remove from db
router.route("/api/plant/:id").delete(function (req, res) {
  db.Plant.destroy({
    where: {
      id: req.params.id,
    },
  }).then(function (dbPlant) {
    res.json(dbPlant);
  });
});

router.route("/api/add-plant").post(function (req, res) {
  db.Plant.create({
    name: req.body.name,
    image: req.body.image,
    UserId: req.body.userId,
    inGarden: req.body.inGarden,
    waterDays: 3,
  }).then(function (dbPlant) {
    res.json(dbPlant);
  });
});

router.route("/api/plant").put(function (req, res) {
  db.Plant.update(req.body, {
    where: { id: req.body.id },
  }).then((dbPlant) => {
    console.log("hello")
    res.json(dbPlant)
  });
});

//save plant = part of row
//will need put routes to make changes to garden, add notes -- consider this being changes to user (ex, notes added to user & displayed on garden 'view,' whatever we dexcide that is)

module.exports = router;
