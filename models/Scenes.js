"use strict";

module.exports = (sequelize, DataTypes) => {
  const Scene = sequelize.define("Scene", {
    scenes: DataTypes.TEXT,
    choiceA: DataTypes.STRING,
    choiceB: DataTypes.STRING,
    responseA: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    responseB: DataTypes.TEXT
  });
  Scene.associate = function(_models) {
    // associations can be defined here
  };
  return Scene;
};
