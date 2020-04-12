const config = require("../config");
const route = require("express").Router();
const User = require("../models/user/userModel.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const Order = require("../models/product/orderSchema");

route.post("/register", (req, res) => {
  User.register(req.body)
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.json(err);
    });
});

route.post("/login", function (req, res) {
  console.log(config.secret);

  User.findOne({email: req.body.email})
    .then((user) => {
      const password = req.body.password;
      bcrypt.compare(password, user.password, (error, isMatch) => {
        if (error) throw error;

        if (isMatch) {
          const token = jwt.sign({id: user._id}, config.secret, {
            expiresIn: 86400,
          });
          const userJson = User.serialize(user._id);
          res.status(200).send({auth: true, token, user: userJson});
        } else {
          res.json({error: "password did not match.."});
        }
      });
    })
    .catch((error) => {
      res.json(error);
    });
});

route.get("/", (req, res) => {
  User.find((err, users) => {
    if (err) {
      res.send(err);
    }
    res.json(users);
  });
});

function orderOrders(orders) {
  const orderedOrders = [];

  orders.forEach((order) => {
    const existingOrder = orderedOrders.find((oo) => oo.ordernumber === order.ordernumber);

    if (existingOrder) {
      existingOrder.products.push(order);
    } else {
      orderedOrders.push({
        ordernumber: order.ordernumber,
        products: [order],
      });
    }
  });

  return orderedOrders;
}

// Order History
route.get("/orderhistory", (req, res) => {
  if (req.user.isAuthenticated) {
    Order.find({userId: req.user.id}).then((orders) => {
      const orderedOrders = orderOrders(orders);
      res.send(orderedOrders);
    });
  } else {
    res.json({message: "You have to be logged in to see your order history."});
  }
});

//Logout
route.get("/logout", (req, res) => {
  req.logout();
  console.log("You are logged out");
});

module.exports = route;
