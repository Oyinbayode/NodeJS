const fs = require("fs");
const path = require("path");

const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "products.json"
);

const getProductFromFile = (callback) => {
  fs.readFile(p, (err, fileContent) => {
    if (!err) {
      callback(JSON.parse(fileContent));
    } else {
      callback([]);
    }
  });
};

const product = [];

module.exports = class Product {
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    this.id = Math.floor(Math.random() * 1000).toString();
    getProductFromFile((products = product) => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => err);
    });
  }

  static fetchAll(callback) {
    getProductFromFile(callback);
  }

  static findById(id, callback) {
    getProductFromFile((products) => {
      callback(products.find((p) => p.id === id));
    });
  }
};
