const mongoose = require("mongoose");

const MANGO_URL =
  "mongodb+srv://DennisPaul08:bfeKZL93wPL8a2nx@cluster0.ws55k.mongodb.net/flowers?retryWrites=true&w=majority";

mongoose.connection.once("open", () => {
  console.log("MongoDB connection ready!");
});

mongoose.connection.on("error", (err) => {
  console.error(err);
});

async function mongoConnect() {
  await mongoose.connect(MANGO_URL);
}

async function mongoDisconnect() {
  await mongoose.disconnect();
}

module.exports = {
  mongoConnect,
  mongoDisconnect,
};
