'use strict';
module.exports = (sequelize, DataTypes) => {
  var Team = sequelize.define('Team', {
    name: { type: DataTypes.STRING, field: 'name' },
    description: { type: DataTypes.STRING, field: 'description' },
    version: { type: DataTypes.STRING, field: 'version' }
  }, {
      underscored: true,
      tableName: 'teams',
      timestamps: true
    });
  Team.associate = function (models) {
    // associations can be defined here
  };
  return Team;
};