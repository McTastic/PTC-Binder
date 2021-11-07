const User = require("./User");
const Card = require("./cards");
const Binder = require("./binder");
const Pokemon = require("./pokemon");
const Type = require("./types");
const Inventory = require("./inventory");
const CardPokemon = require("./card_pokemon");

User.hasMany(Binder, {
  foreignKey: "account_id",
  onDelete: "CASCADE",
});

Binder.belongsTo(User, {
  foreignKey: "account_id",
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

// Pokemon.belongsToMany(Card, {
//   through: {
//     model: CardPokemon,
//     unique: false,
//   },
// });

Pokemon.hasMany(Card, {
  foreignKey: "pokemon_id",
  onDelete: "CASCADE",
});

Card.belongsTo(Pokemon, { foreignKey: "pokemon_id" });

// Pokemon.hasMany(Type, {
//   foreignKey: "type_id",
// });

// Card.belongsToMany(Binder,
//   {
//     through: {
//   model:
// }});

// Card.belongsToMany(Account, {
//   through: {
//     model: Binder,
//     unique: false,
//   },
// });

// Type.belongsToMany(Pokemon);

module.exports = { User, Card, Binder, Pokemon, Type, Inventory };
