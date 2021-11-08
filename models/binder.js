const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Binder extends Model {}

Binder.init(
  {
    binder_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    binder_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    account_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "user",
        key: "user_id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "binder",
  }
);

module.exports = Binder;
