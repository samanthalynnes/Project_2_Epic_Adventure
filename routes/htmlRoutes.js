const Router = require("express").Router;
const db = require("../models");

const htmlRoutes = new Router();

htmlRoutes.get("/", async (_req, res) => {
  const intro = await db.Scene.findAll({});

  res.render("index", { scenes: intro });
});

// Load example page and pass in an example by id
htmlRoutes.get("/scenes/:id", async (req, res) => {
  const options = {
    where: {
      id: req.params.id
    }
  };

  const dbScene = await db.Scene.findOne(options);

  res.render("scenes", { scenes: dbScene });
});

// Render 404 page for any unmatched routes
htmlRoutes.get("*", async (_req, res) => {
  res.render("404");
});

module.exports = htmlRoutes;
