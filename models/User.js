"use strict";

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    user: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 20]
      }
    },
    gender: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    page: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
  User.associate = function(_models) {
    // associations can be defined here
  };
  return User;
};
