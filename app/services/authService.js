const jwt = require("jsonwebtoken");
const config = require("../configs/config");
const userService = require("../services/userService");

exports.autenticar = (user, pass) => {
  if (user == pass) {
    const token = jwt.sign({ id: user }, config.SECRET, { expiresIn: 10000 });
    return token;
  } else {
    return "Error";
  }
};

exports.signUp = async user => {
  const username = user.userName;
  const userExist = await userService.getUserByUsername(username);

  if (userExist) {
    throw new Error("El usuario ya existe");
  }
  return await userService.createUser(user);
};

exports.validarToken = token => {
  const decodedToken = jwt.verify(token, config.SECRET);
  return decodedToken;
};
