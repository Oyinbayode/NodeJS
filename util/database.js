const { MongoClient } = require("mongodb");

let _db;
const mongoConnect = (callback) => {
  const uri =
    "mongodb+srv://oyinbayode:ba1ya4da2@cluster0.5qcrt.mongodb.net/oyinbayode?retryWrites=true&w=majority";

  MongoClient.connect(uri)
    .then((client) => {
      console.log("connected!!!!!!");
      _db = client.db();
      callback();
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw "No database found";
};

module.exports = { mongoConnect, getDb };
