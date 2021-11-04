const Product = require("../models/product");

const getAddProduct = (req, res, next) => {
  res.render("admin/add-product", {
    DocTitle: "Add Product",
    path: "/admin/add-product",
  });
};

const postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageURL = req.body.imageURL;
  const price = req.body.price;
  const description = req.body.description;

  const product = new Product(title, imageURL, description, price);
  product.save();
  res.redirect("/");
};

const getProduct = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("admin/products", {
      prods: products,
      DocTitle: "Admin Products",
      path: "/admin/products",
    });
  });
};

module.exports = { getAddProduct, postAddProduct, getProduct };
