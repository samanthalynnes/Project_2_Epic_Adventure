const Router = require("express").Router;
const db = require("../../models");

const sceneRoutes = Router();

// Get all examples
sceneRoutes
  .route("/")

  .get(async (_req, res) => {
    const dbExamples = await db.Scene.findAll({});
    res.json(dbExamples);
  })

  .post(async (req, res) => {
    const dbExample = await db.Scene.create(req.body);
    res.json(dbExample);
  });

// Delete an example by id
sceneRoutes.delete("/:id", async (req, res) => {
  const options = {
    where: {
      id: req.params.id
    }
  };
  const dbExample = await db.Scene.destroy(options);
  res.json(dbExample);
});

module.exports = sceneRoutes;
