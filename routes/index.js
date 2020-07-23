const router = require("express").Router();

router.route("/test").get((req, res) => {
  console.log("test works");
  res.send("test works");
});
module.exports = router;
