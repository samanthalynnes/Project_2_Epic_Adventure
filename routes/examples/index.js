const Router = require("express").Router;
const db = require("../../models");

const allRoutes = Router();

// Get all scenes
allRoutes
  .route("/")

  .get(async (_req, res) => {
    const dbFind = await db.Scene.findAll({});
    res.json(dbFind);
  });

// Below for user table
allRoutes.post("/user", async (req, res) => {
  const dbPost = await db.User.create(req.body);
  console.log(dbPost);
  res.redirect("/scenes/1");
});

allRoutes.put("/user", async (req, res) => {
  const options = {
    where: {
      id: req.body.id
    }
  };
  const dbUpdate = await db.User.update(
    {
      page: req.body.page
    },
    options
  );
  res.json(dbUpdate);
});

module.exports = allRoutes;
