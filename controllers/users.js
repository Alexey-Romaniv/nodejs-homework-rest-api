const { User } = require("../models/user");
const { ctrlWrapper, HttpError } = require("../helpers/index");

const register = async (req, res) => {
  console.log("111");
  console.log(req.body);
  const newUser = await User.create(req.body);

  res.status(201).json({
    email: newUser.email,
  });
};

module.exports = {
  register: ctrlWrapper(register),
};
