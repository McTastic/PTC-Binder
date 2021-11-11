const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class BinderCard extends Model {}

BinderCard.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    binder_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "binder",
        key: "binder_id",
      },
    },
    card_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "card",
        key: "card_id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "binder_card",
  }
);

module.exports = BinderCard;
