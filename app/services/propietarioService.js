const propietarioModel = require("../models/propietarioModel");

exports.obtenerPropietarios = async propietario => {
  if (propietario.query.documento) {
    return await propietarioModel
      .findOne({
        documento: propietarioModel.query.documento
      })
      .populate("Apartamento", "numero piso propietario");
  } else {
    return await propietarioModel
      .find()
      .populate("Apartamento", "numero piso propietario");
  }
};

exports.crearPropietario = async idPropietario => {
  return await propietarioModel.create(idPropietario);
};

exports.eliminarPropietario = async idPropietario => {
  return await propietarioModel.findByIdAndDelete(idPropietario);
};

exports.findPropietario = async idPropietario => {
  return await propietarioModel
    .findById(idPropietario)
    .populate("Apartamento", "numero piso propietario");
};

exports.actualizarPropietario = async (idPropietario, data) => {
  return await propietarioModel.findByIdAndUpdate(idPropietario, data, {
    new: true
  });
};
