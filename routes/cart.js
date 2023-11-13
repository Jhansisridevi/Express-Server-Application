const express = require("express");
const router = express.Router();
const data = require("../data/cart-data");
const order = require("../data/orders-data");
const user = require("../data/users-data");
const path = require("path");

router.get("^/$|/home(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "index.html"));
});

router.get("/cart", (req, res) => {
  res.render(path.join(__dirname, "..", "views", "cart.ejs"), { data });
});
router.get("/order", (req, res) => {
  res.render(path.join(__dirname, "..", "views", "order.ejs"), { order });
});
router.get("/order/:id", (req, res) => {
  // Filter products based on the 'id' parameter
  const orderid = req.params.id;
  const filteredOrders = order.filter((product) => product.id == orderid);
  res.render(path.join(__dirname, "..", "views", "order.ejs"), {
    order: filteredOrders,
  });
});
router.get("/user", (req, res) => {
  res.render(path.join(__dirname, "..", "views", "user.ejs"), { user });
});
router.get("/get", (req, res) => {
  // Filter products based on the 'category' query parameter
  const userid = req.query.id;
  const filteredUsers = user.filter((product) => product.id == userid);
  res.render(path.join(__dirname, "..", "views", "user.ejs"), {
    user: filteredUsers,
  });
});
router.get("/*", (req, res) => {
    //404 for all other request
  res
    .status(404)
    .sendFile(path.join(__dirname, "..", "views", "new-page.html"));
});

module.exports = router;
