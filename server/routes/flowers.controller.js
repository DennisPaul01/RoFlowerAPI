const {
  getAllFlowers,
  existsFlowerWithName,
  saveFlowers,
} = require("../models/flowers.model");

const { getPagination } = require("../services/query");

async function httpGetAllFLowers(req, res) {
  const { skip, limit } = getPagination(req.query);
  const countFlowers = (await getAllFlowers()).length;
  console.log(countFlowers);
  return res.status(200).json(await getAllFlowers());
}

async function httpGetOneFlower(req, res) {
  const flowerName = req.params.id.trim();
  const renameFlower = `${flowerName[0].toUpperCase()}${flowerName
    .slice(1)
    .toLowerCase()}`;

  const existsFlower = await existsFlowerWithName(renameFlower);

  if (!existsFlower) {
    return res.status(404).json({
      error: "Floarea nu este in data de baze",
    });
  } else {
    return res.status(200).json(existsFlower);
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
};
