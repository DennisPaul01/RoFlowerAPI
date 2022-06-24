const express = require("express");

const {
  httpGetAllFLowers,
  httpGetOneFlower,
  httpAddFlower,
} = require("./flowers.controller");

const flowersRouter = express.Router();

flowersRouter.get("/", httpGetAllFLowers);
flowersRouter.post("/", httpAddFlower);
flowersRouter.get("/:id", httpGetOneFlower);

module.exports = flowersRouter;
