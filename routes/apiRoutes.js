const Router = require("express").Router;
const sceneRoutes = require("./examples");

const apiRoutes = Router();

apiRoutes.use("/scenes", sceneRoutes);

module.exports = apiRoutes;
