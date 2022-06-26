const flowersSchema = require("./flowers.mongo");

const flowers = require("../data/dataFlowers");

async function loadDataFlowers() {
  flowers.map((data) => {
    saveFlowers(data);
  });
}

async function loadLaunchData() {
  console.log("Denis Paul is bed");
}
async function getAllFlowers() {
  console.log("Denis Flowers");
  return flowersSchema.find(
    {},
    {
      _id: 0,
      __v: 0,
    }
  );
}

async function findFlower(filter) {
  return await flowersSchema.findOne(filter);
}

async function existsFlowerWithName(flowerName) {
  return await findFlower({ nume: flowerName });
}

async function findFlowersByCategory(filter) {
  return await flowersSchema.find({ diviziune: filter });
}

async function findFlowersByLocatie(filter) {
  return await flowersSchema.find({ locatieGeografica: filter });
}

async function saveFlowers(flower) {
  try {
    await flowersSchema.updateOne(flower, flower, { upsert: true });
  } catch (err) {
    console.error(`Could not save the flower ${err}`);
  }
}

module.exports = {
  saveFlowers,
  loadDataFlowers,
  loadLaunchData,
  getAllFlowers,
  existsFlowerWithName,
  findFlowersByCategory,
  findFlowersByLocatie,
};
