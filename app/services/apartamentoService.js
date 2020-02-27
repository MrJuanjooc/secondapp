const apartamentoModel = require("../models/apartamentoModel"),
  propietarioModel = require("../models/propietarioModel"),
  urbanizacionModel = require("../models/urbanizacionModel");

exports.obtenerApartamento = async () => {
  return await apartamentoModel
    .find()
    .populate("urbanizacion", "nombre direccion")
    .populate("propietario", "nombre edad documento sexo");
};

exports.crearApartamento = async (apartamento, urbanizacion, propietario) => {
  return await apartamentoModel.create(apartamento);

  let Urbanizacion = await urbanizacionModel.findById(urbanizacion);
  Urbanizacion.apartamentos.push(apartamento);
  Urbanizacion.save();

  let Propietario = await propietarioModel.findById(propietario);
  Propietario.apartamentos.push(apartameno);
  Propietario.save();
};

exports.eliminarApartamento = async (idApartamento) => {
  return await apartamentoModel.findByIdAndDelete(idApartamento);
};

exports.findApartamento = async idApartamento => {
  return await apartamentoModel
    .findById(idApartamento)
    .populate("urbanizacion", "nombre direccion")
    .populate("propietario", "nombre edad documento sexo");
};

exports.actualizarApartamento = async (idApartamento, data) => {
  return await apartamentoModel.findByIdAndUpdate (idApartamento, data, {new: true});
};
