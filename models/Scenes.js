"use strict";

module.exports = (sequelize, DataTypes) => {
  const Scene = sequelize.define("sceneData", {
    scenes: DataTypes.TEXT
  });
  Scene.associate = function(_models) {
    // associations can be defined here
  };
  return Scene;
};
