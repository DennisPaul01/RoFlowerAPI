const express = require("express");

const flowersRouter = require("./flowers.router");

const api = express.Router();
api.use("/flowers", flowersRouter);

module.exports = api;
