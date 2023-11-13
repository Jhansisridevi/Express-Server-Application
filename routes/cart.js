const express = require("express");
const router = express.Router();
const data = require("../data/cart-data");
const order = require("../data/orders-data");
const user = require("../data/users-data");
const path = require("path");

//route to view Home page
router.get("^/$|/home(.html)?", (req, res) => { //Regex to validate
  res.sendFile(path.join(__dirname, "..", "views", "index.html"));
});
//route to view all products
router.get("^\/cart$", (req, res) => { //Regex to validate
  res.render(path.join(__dirname, "..", "views", "cart.ejs"), { data });
});
//route to view all orders
router.get("^\/order$", (req, res) => { //Regex to validate
  res.render(path.join(__dirname, "..", "views", "order.ejs"), { order });
});
router.get("/order/:id", (req, res) => {
  // Filter products based on the 'id' parameter
  const orderid = req.params.id;
  const filteredOrders = order.filter((product) => product.id == orderid);
  if(filteredOrders.length!=0){
    res.render(path.join(__dirname, "..", "views", "order.ejs"), {
      order: filteredOrders,
    });  
  }
  else{
    res.status(404).send("Order does not exist")
}
});
//route to view all user 
router.get("^\/user$", (req, res) => { //Regex to validate
  res.render(path.join(__dirname, "..", "views", "user.ejs"), { user });
});
router.get("/get", (req, res) => {
  // Filter products based on the 'id' query parameter
  const userid = req.query.id;
  const filteredUsers = user.filter((product) => product.id == userid);
 
  if(filteredUsers.length!=0){
    res.render(path.join(__dirname, "..", "views", "user.ejs"), {
      user: filteredUsers,
    });
  }
  else {
    res.status(404).send("User does not exist")
  }
});
router.get("/*", (req, res) => {
    //404 for all other request
  res
    .status(404)
    .sendFile(path.join(__dirname, "..", "views", "new-page.html"));
});

module.exports = router;
