const express = require("express");
const publicRoutes = require("./routes/publicRoutes");
const privateRoutes = require("./routes/privateRoutes");
const app = express();
const PORT = process.env.PORT || 3001;
const db = require("./models");

// const jwt = require("express-jwt");
// const jwks = require("jwks-rsa");

// const jwtCheck = jwt({
//   secret: jwks.expressJwtSecret({
//     cache: true,
//     rateLimit: true,
//     jwksRequestsPerMinute: 5,
//     jwksUri: "https://plantpeople.us.auth0.com/.well-known/jwks.json",
//   }),
//   audience: "https://quickstarts/api",
//   issuer: "https://plantpeople.us.auth0.com/",
//   algorithms: ["RS256"],
// });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// These routes aren't protected
app.use(publicRoutes);
// These routes are protected
// app.use(jwtCheck);
app.use(privateRoutes);
// Start the API server
db.sequelize.sync({ force: false }).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});
