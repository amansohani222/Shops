const express = require("express");
const app = express();
const fs = require("fs");
const morgan = require("morgan");
const db = require("./config/database.js");

//DB Connection
db.authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });

// 1) Middlewares
app.use(express.static(`${__dirname}/public`));
app.use(express.json());
if (process.env.NODE_ENV == "development") {
  app.use(morgan("dev"));
}

const organisationRoutes = require("./routes/organisationRoutes.js");
const adminRoutes = require("./routes/adminRoutes.js");
app.use("/api/v1/organisations", organisationRoutes);
app.use("/api/v1/admin", adminRoutes);

module.exports = app;
