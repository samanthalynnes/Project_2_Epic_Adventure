const Router = require("express").Router;
const allRoutes = require("./examples");

const apiRoutes = Router();

apiRoutes.use("/scenes", allRoutes);

module.exports = apiRoutes;
