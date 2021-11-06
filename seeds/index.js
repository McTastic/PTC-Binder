const sequelize = require("../config/connection");
const {
  Account,
  Inventory,
  Binder,
  Card,
  Pokemon,
  Type,
} = require("../models");

const pokemonSeedData = require("./pokemonSeedData.json");
const accountSeedData = require("./accountSeedData.json");
const cardSeedData = require("./cardSeedData.json");
const InventorySeedData = require("./inventorySeedData.json");
const typeSeedData = require("./typeSeedData.json");
const binderSeedData = require("./binderSeedData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const accounts = await Account.bulkCreate(accountSeedData);
  const binders = await Binder.bulkCreate(binderSeedData);
  const inventory = await Inventory.bulkCreate(InventorySeedData);
  const pokemon = await Pokemon.bulkCreate(pokemonSeedData);
  const types = await Type.bulkCreate(typeSeedData);
  const cards = await Card.bulkCreate(cardSeedData);

  //   // Create trips at random
  //   for (let i = 0; i < 10; i++) {
  //     // Get a random traveller's `id`
  //     const { id: randomTravellerId } = travellers[
  //       Math.floor(Math.random() * travellers.length)
  //     ];

  //     // Get a random location's `id`
  //     const { id: randomLocationId } = locations[
  //       Math.floor(Math.random() * locations.length)
  //     ];

  //     // Create a new trip with random `trip_budget` and `traveller_amount` values, but with ids selected above
  //     await Trip.create({
  //       trip_budget: (Math.random() * 10000 + 1000).toFixed(2),
  //       traveller_amount: Math.floor(Math.random() * 10) + 1,
  //       traveller_id: randomTravellerId,
  //       location_id: randomLocationId
  //     }).catch((err) => {
  //       // If there's an error, such as the same random pairing of `traveller.id` and `location.id` occurring and we get a constraint error, don't quit the Node process
  //       console.log(err);
  //     });
  //   }

  process.exit(0);
};

seedDatabase();
