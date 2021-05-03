'use strict';
module.exports = function(sequelize, DataTypes) {
  var teams = sequelize.define('teams', {
    teamName: DataTypes.TEXT,
    teamMembers: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return teams;
};