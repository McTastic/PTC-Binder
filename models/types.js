const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Type extends Model {}

Type.init(
  {
    type_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    type_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "type",
  }
);

module.exports = Type;
