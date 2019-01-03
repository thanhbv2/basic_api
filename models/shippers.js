'use strict';
module.exports = (sequelize, DataTypes) => {
  var Shipper = sequelize.define('Shipper', {
    name: { type: DataTypes.STRING, field: 'name' },
    email: { type: DataTypes.STRING, field: 'email' },
    mobile: { type: DataTypes.STRING, field: 'mobile' },
    address: { type: DataTypes.STRING, field: 'address' },
    isActived: { type: DataTypes.STRING, field: 'is_actived' },
    teamId: { type: DataTypes.INTEGER, field: 'team_id' }
  }, {
      underscored: true,
      tableName: 'shippers',
      timestamps: true,
    });
  Shipper.associate = function (models) {
    // associations can be defined here
  };
  return Shipper;
};