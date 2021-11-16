const sequelize = require("../config/connection");
const {
  User,
  Inventory,
  Binder,
  Card,
  Pokemon,
  Type,
  BinderCard,
} = require("../models");

const pokemonSeedData = require("./pokemonSeedData.json");
const userSeedData = require("./userSeedData.json");
const cardSeedData = require("./cardSeedData.json");
const InventorySeedData = require("./inventorySeedData.json");
const typeSeedData = require("./typeSeedData.json");
const binderSeedData = require("./binderSeedData.json");
const binderCardSeedData = require("./binderCardSeedData.json");
const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userSeedData, {
    individualHooks: true,
    returning: true,
  });
  const binders = await Binder.bulkCreate(binderSeedData);
  const inventory = await Inventory.bulkCreate(InventorySeedData);
  const pokemon = await Pokemon.bulkCreate(pokemonSeedData);
  const types = await Type.bulkCreate(typeSeedData);
  const cards = await Card.bulkCreate(cardSeedData);
  const binderCards = await BinderCard.bulkCreate(binderCardSeedData);
  process.exit(0);
};
// seed database
seedDatabase();
