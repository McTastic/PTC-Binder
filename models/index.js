const User = require("./User");
const Card = require("./cards");
const Binder = require("./binder");
const Pokemon = require("./pokemon");
const Type = require("./types");
const Inventory = require("./inventory");
const CardPokemon = require("./card_pokemon");
const BinderCard = require("./binder_card");

User.hasMany(Binder, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Binder.belongsTo(User, {
  foreignKey: "user_id",
});

// Binder.hasMany(Inventory, {
//   foreignKey: "binder_id",
//   onDelete: "CASCADE",
// });

// Inventory.belongsTo(Binder, {
//   foreignKey: "binder_id",
// });

Inventory.hasOne(Card, {
  foreignKey: "card_id",
});

// Card.belongsToMany(Inventory, {
//   foreignKey: "card_id",
// });

// Creates a many-to-many relationship through the mapping table binder_card
Binder.belongsToMany(Card, {
  through: {
    model: BinderCard,
    unique: false,
    foreignKey: "binder_id",
    otherKey: "binder_id",
  },
});

Card.belongsToMany(Binder, {
  through: {
    model: BinderCard,
    unique: false,
    foreignKey: "card_id",
    otherKey: "card_id",
  },
});
Binder.hasMany(BinderCard);
BinderCard.belongsTo(Binder, {
  foreignKey: "binder_id",
});

Card.hasMany(BinderCard);
BinderCard.belongsTo(Card, {
  foreignKey: "card_id",
});

// Card.belongsTo(Binder, {
//   through: {
//     model: BinderCard,
//     key: "binder_id",
//   },
// });

Pokemon.hasMany(Card, {
  foreignKey: "pokemon_id",
  onDelete: "CASCADE",
});

Card.belongsTo(Pokemon, { foreignKey: "pokemon_id" });

module.exports = { User, Card, Binder, Pokemon, Type, Inventory, BinderCard };
