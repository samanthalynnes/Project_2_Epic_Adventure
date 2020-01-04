const Router = require("express").Router;
const db = require("../models");

const htmlRoutes = new Router();

htmlRoutes.get("/", async (_req, res) => {
  res.render("./layouts/main");
});

htmlRoutes.get("/scenes/:id", async (req, res) => {
  const options = {
    where: {
      id: req.params.id
    }
  };

  const dbScene = await db.Scene.findOne(options);

  res.render("index", { scenes: dbScene });
});

htmlRoutes.get("/login", async (_req, res) => {
  res.render("form");
});

htmlRoutes.get("/story", async (_req, res) => {
  res.render("index");
});

module.exports = htmlRoutes;
