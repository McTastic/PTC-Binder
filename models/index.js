const User = require("./User");
const Card = require("./cards");
const Binder = require("./binder");
const Pokemon = require("./pokemon");
const Type = require("./types");
const Inventory = require("./inventory");
const CardPokemon = require("./card_pokemon");

User.hasMany(Binder, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Binder.belongsTo(User, {
  foreignKey: "user_id",
});

Binder.hasMany(Inventory, {
  foreignKey: "binder_id",
  onDelete: "CASCADE",
});

Inventory.belongsTo(Binder, {
  foreignKey: "binder_id",
});

Inventory.hasMany(Card, {
  foreignKey: "card_id",
});

Card.belongsTo(Inventory, {
  foreignKey: "card_id",
});

Pokemon.hasMany(Card, {
  foreignKey: "pokemon_id",
  onDelete: "CASCADE",
});

Card.belongsTo(Pokemon, { foreignKey: "pokemon_id" });

module.exports = { User, Card, Binder, Pokemon, Type, Inventory };
