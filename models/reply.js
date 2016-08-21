'use strict';
module.exports = function(sequelize, DataTypes) {
  var Reply = sequelize.define('Reply', {

  }, {
    classMethods: {
      associate: function(models) {
        Reply.belongsTo(models.Pair);
        Reply.belongsTo(models.Word);
      }
    }
  });
  return Reply;
};