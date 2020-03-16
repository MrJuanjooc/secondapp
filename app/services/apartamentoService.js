const apartamentoModel = require("../models/apartamentoModel"),
  propietarioModel = require("../models/propietarioModel"),
  urbanizacionModel = require("../models/urbanizacionModel");
  reqFieldException = require('../exceptions/reqFieldException');

exports.obtenerApartamento = async () => {
  return await apartamentoModel
    .find()
    .populate("urbanizacion", "nombre direccion")
    .populate("propietario", "nombre edad documento sexo");
};

exports.crearApartamento = async (apto, urbanizacion, propietario) => {

  if (!apto) {
    throw new reqFieldException('Apartamento');
  }
  
  if (!urbanizacion) {
    throw new reqFieldException('urbanizacion');
  } 

  if (!propietario) {
    throw new reqFieldException('propietario');
  }

  let apartamento =  await apartamentoModel.create(apto);

  let Urbanizacion = await urbanizacionModel.findById(urbanizacion);
  Urbanizacion.apartamentos.push(apartamento);
  Urbanizacion.save();

  let Propietario = await propietarioModel.findById(propietario);
  Propietario.apartamentos.push(apartamento);
  Propietario.save();

  return apartamento;
};

exports.eliminarApartamento = async idApartamento => {
  return await apartamentoModel.findByIdAndDelete(idApartamento);
};

exports.findApartamento = async idApartamento => {
  return await apartamentoModel
    .findById(idApartamento)
    .populate("urbanizacion", "nombre direccion")
    .populate("propietario", "nombre edad documento sexo");
};

exports.actualizarApartamento = async (idApartamento, data) => {
  return await apartamentoModel.findByIdAndUpdate(idApartamento, data, {
    new: true
  });
};
