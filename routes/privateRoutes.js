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

router.route("/api/user").post(function(req, res){
console.log(req.body);
db.User.findOne({
  where: {
    sub: req.body.sub,
  },
}).then(function (dbUser) {
  if(!dbUser){
    db.User.create({
      name: req.body.name,
      sub:req.body.sub,
      
    }).then(function (dbUser) {
      dbUser.plants = []
      res.json(dbUser);
    });
  } else {
    db.Plant.findAll({where: {UserId: dbUser.id}}).then(plants=>{
      console.log("PLANTS HERE", plants, plants.map(p=>p.dataValues))
      dbUser.plants = plants.map(p=>p.dataValues)
      res.json(dbUser)
    })
 
  }
  })
})

//this will completely remove from being associated w/ user, remove from db
router.route("/api/plant/:id").delete(function(req, res) {
  db.Plant.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(function(dbPlant) {
    res.json(dbPlant);
  });
}
)

router.route("/api/add-plant").post(function(req, res) {
  console.log(req.body);
  db.Plant.create({
    name: req.body.name,
    image: req.body.image,
    UserId: req.body.userId,
    inGarden: req.body.inGarden
  }).then(function(dbPlant) {
    res.json(dbPlant);
  });
})
;


//save plant = part of row
//will need put routes to make changes to garden, add notes -- consider this being changes to user (ex, notes added to user & displayed on garden 'view,' whatever we dexcide that is)


module.exports = router;
