const express = require("express");


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// These routes aren't protected
app.use(publicRoutes);



// Start the API server

db.sequelize.sync({ force: true }).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});
