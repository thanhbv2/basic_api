'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
      underscored: true,
      tableName: "users",
      timestamps: true
    });
  User.associate = function (models) {
    // associations can be defined here
  };
  return User;
};