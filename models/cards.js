const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Card extends Model {}

Card.init(
  {
    card_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    card_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    pokemon_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "pokemon",
        key: "pokemon_id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "card",
  }
);

module.exports = Card;
