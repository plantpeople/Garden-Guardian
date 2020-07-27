const express = require("express");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const db = require("./models");

var jwt = require("express-jwt");
var jwks = require("jwks-rsa");

var jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: "https://plantpeople.us.auth0.com/.well-known/jwks.json",
  }),
  audience: "https://quickstarts/api",
  issuer: "https://plantpeople.us.auth0.com/",
  algorithms: ["RS256"],
});

app.use(jwtCheck);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Start the API server

db.sequelize.sync({ force: true }).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});
