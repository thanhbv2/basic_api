'use strict';
module.exports = (sequelize, DataTypes) => {
  var UsersTest = sequelize.define('UsersTest', {
    username: { type: DataTypes.STRING, field: 'username' },
    password: { type: DataTypes.STRING, field: 'password' },
    email: { type: DataTypes.STRING, field: 'email' },
    address: DataTypes.STRING,
    isValidEmail: { type: DataTypes.BOOLEAN, field: 'is_valid_email' }
  }, {
      underscored: true,
      tableName: 'users_tests',
      timestampt: true
    });
  UsersTest.associate = function (models) {
    // associations can be defined here
  };
  return UsersTest;
};