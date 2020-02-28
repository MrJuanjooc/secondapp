const jwt = require("jsonwebtoken");
config = require("../configs/config");

exports.autenticar = (user, pass) => {
  if (user == pass) {
    const token = jwt.sign({ id: user }, config.SECRET, { expiresIn: 10000 });
    return token;
  } else {
    return "Error";
  }
};

exports.validarToken = token => {
  const decodedToken = jwt.verify(token, config.SECRET);
  return decodedToken;
};
