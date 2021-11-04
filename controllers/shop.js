const Product = require("../models/product");
const Cart = require("../models/cart");

const getProduct = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/product-list", {
      prods: products,
      DocTitle: "All Products",
      path: "/products",
    });
  });
};

const getIndProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findById(prodId, (product) => {
    res.render("shop/product-detail", {
      product,
      DocTitle: product.title,
      path: "/products",
    });
  });
};

const getIndex = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/index", {
      prods: products,
      DocTitle: "Shop",
      path: "/",
    });
  });
};

const postCart = (req, res, next) => {
  const productId = req.body.productID;
  Product.findById(productId, (product) => {
    Cart.addProduct(productId, product.price);
  });
  res.redirect("/cart");
};

const getCart = (req, res, next) => {
  res.render("shop/cart", {
    path: "/cart",
    DocTitle: "Your Cart",
  });
};

const getOrders = (req, res, next) => {
  res.render("shop/orders", {
    path: "/orders",
    DocTitle: "Your Orders",
  });
};

const getCheckout = (req, res, next) => {
  res.render("shop/checkout", {
    path: "/checkout",
    DocTitle: "Checkout",
  });
};

module.exports = {
  getProduct,
  getIndex,
  getCart,
  getCheckout,
  getOrders,
  getIndProduct,
  postCart,
};
