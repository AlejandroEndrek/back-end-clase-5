const { newUser } = require("../models/userModel");

const renderRegister = (request, response) => {
  response.render("register");
};

const createUser = (request, response) => {
  const user = request.body;

  console.log(user);
  newUser(user);
  response.render("newUser", { usuario: user });
};

module.exports = { renderRegister, createUser };
