const mongoose = require("mongoose");
// User Model
const User = require("./userSchema");
const bcrypt = require("bcryptjs");

User.register = async (newUserData) => {
  const {name, email, password} = newUserData;
  if (!name || !email || !password) throw new Error("Missing data. Fix it!");

  const newUser = new User({
    _id: new mongoose.Types.ObjectId(),
    name,
    email,
    password,
  });

  // hashar passet
  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync(password, salt);

  // password to hashed
  newUser.password = hash;

  // Save User
  return newUser.save().then((user) => {
    return User.serialize(user);
  });
};

User.serialize = (user) => {
  const {name, email, _id} = user;
  return {name, email, _id};
};

module.exports = User;
