const {
  getAllFlowers,
  findFlower,
  saveFlowers,
  findFlowersByCategory,
  findFlowersByLocatie,
} = require("../models/flowers.model");

const { getPagination } = require("../services/query");

async function httpGetAllFLowers(req, res) {
  const { skip, limit } = getPagination(req.query);
  const countFlowers = (await getAllFlowers()).length;
  return res.status(200).json(await getAllFlowers());
}

async function httpGetOneFlower(req, res) {
  const flowerName = req.params.id.trim();
  const renameFlower = `${flowerName[0].toUpperCase()}${flowerName
    .slice(1)
    .toLowerCase()}`;

  const existsFlower = await findFlower(renameFlower);

  if (!existsFlower) {
    return res.status(404).json({
      error: "Floarea nu este in data de baze",
    });
  } else {
    return res.status(200).json(existsFlower);
  }
}

async function httpGetFlowerByCategory(req, res) {
  const flowerName = req.params.id.trim();
  const renameFlower = `${flowerName[0].toUpperCase()}${flowerName
    .slice(1)
    .toLowerCase()}`;

  const existsCategory = await findFlowersByCategory(renameFlower);
  if (!existsCategory) {
    return res.status(404).json({
      error: "Categoria aceasta nu se afla in baza de date",
    });
  } else {
    return res.status(200).json(existsCategory);
  }
}

async function httpGetFlowerByLocation(req, res) {
  const flowerName = req.params.id.trim();
  const renameFlower = `${flowerName[0].toUpperCase()}${flowerName
    .slice(1)
    .toLowerCase()}`;

  const existsLocations = await findFlowersByLocatie(renameFlower);
  if (!existsLocations) {
    return res.status(404).json({
      error: "Categoria aceasta nu se afla in baza de date",
    });
  } else {
    return res.status(200).json(existsLocations);
  }
}

async function httpAddFlower(req, res) {
  const newFlower = req.body;
  const renameFlower = `${newFlower.nume[0].toUpperCase()}${newFlower.nume
    .slice(1)
    .toLowerCase()}`;
  if (
    !newFlower.nume ||
    !newFlower.denumirePopulara ||
    !newFlower.image ||
    !newFlower.zona ||
    !newFlower.locatieGeografica ||
    !newFlower.diviziune ||
    !newFlower.descriere ||
    !newFlower.location
  ) {
    return res.status(400).json({
      error: "Cateva proprietari lipsesc!",
    });
  } else {
    const flowerToAdd = { nume: renameFlower, ...newFlower };
    saveFlowers(flowerToAdd);
    return res.status(200).json(flowerToAdd);
  }
}

module.exports = {
  httpGetAllFLowers,
  httpGetOneFlower,
  httpAddFlower,
  httpGetFlowerByCategory,
  httpGetFlowerByLocation,
};
