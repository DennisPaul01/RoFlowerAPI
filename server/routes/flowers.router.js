const express = require("express");

const {
  httpGetAllFLowers,
  httpGetOneFlower,
  httpAddFlower,
  httpGetFlowerByCategory,
  httpGetFlowerByLocation,
} = require("./flowers.controller");

const flowersRouter = express.Router();

flowersRouter.get("/", httpGetAllFLowers);
flowersRouter.post("/", httpAddFlower);
flowersRouter.get("/:id", httpGetOneFlower);
flowersRouter.get("/category/:id", httpGetFlowerByLocation);
flowersRouter.get("/diviziune/:id", httpGetFlowerByCategory);

module.exports = flowersRouter;
