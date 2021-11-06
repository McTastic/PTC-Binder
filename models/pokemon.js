const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Pokemon extends Model {}

Pokemon.init(
  {
    pokemon_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    pokemon_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "pokemon",
  }
);

module.exports = Pokemon;
