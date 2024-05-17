const express = require("express");
const router = require("./routes/route.cjs");

const makeApp = (database) => {
  if (database) {
    database();
  }
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use("/", router);
  return app;
};

module.exports = makeApp;
