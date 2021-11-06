const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class CardPokemon extends Model {}

CardPokemon.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    pokemon_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "pokemon",
        key: "pokemon_id",
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
    modelName: "card_pokemon",
  }
);

module.exports = CardPokemon;
