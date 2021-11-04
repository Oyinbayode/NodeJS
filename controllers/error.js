const render404 = (req, res, next) => {
  res.status(404).render("pageNotFound", { DocTitle: "404" });
};

module.exports = { render404 };
