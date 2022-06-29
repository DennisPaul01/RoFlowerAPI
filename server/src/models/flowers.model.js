const flowersSchema = require("../models/flowers.mongo");

const flowers = require("../../data/dataFlowers");

async function loadDataFlowers() {
  flowers.map((data) => {
    saveFlowers(data);
  });
}

async function getAllFlowers() {
  return flowersSchema.find(
    {},
    {
      _id: 0,
      __v: 0,
    }
  );
}

async function findFlower(filter) {
  return await flowersSchema.findOne(
    {
      $or: [{ nume: filter }, { denumirePopulara: filter }],
    },
    { _id: 0, __v: 0 }
  );
}

async function findFlowersByCategory(filter) {
  return await flowersSchema.find({ diviziune: filter }, { _id: 0, __v: 0 });
}

async function findFlowersByLocatie(filter) {
  return await flowersSchema.find(
    { locatieGeografica: filter },
    { _id: 0, __v: 0 }
  );
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
  getAllFlowers,
  findFlower,
  findFlowersByCategory,
  findFlowersByLocatie,
};
