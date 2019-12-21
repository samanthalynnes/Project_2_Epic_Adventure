"use strict";

module.exports = (sequelize, DataTypes) => {
  const Scene = sequelize.define("Scene", {
    scenes: DataTypes.TEXT,
    choiceA: {
      type: DataTypes.STRING,
      allowNull: true
    },
    choiceB: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });
  Scene.associate = function(_models) {
    // associations can be defined here
  };
  return Scene;
};
