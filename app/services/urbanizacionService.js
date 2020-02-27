const urbanizacionModule = require("../models/urbanizacionModel"),
  apartamentoConstroller = require("../controllers/apartamentoController");

exports.obtenerUrbanizacion = async () => {
  return await urbanizacionModule.find().populate({
    path: "apartamentos",
    select: "numero piso",
    populate: {
      path: "propietarios",
      select: "nombre edad documento sexo"
    }
  });
};

exports.crearUrbanizacion = async (urbanizacion) => {
  return await urbanizacionModule.create(urbanizacion);
};

exports.eliminarUrbanizacion = async (idUrbanizacion) => {
    return await urbanizacionModule.findByIdAndDelete(idUrbanizacion);
};

exports.findUrbanizacion = async (idUrbanizacion) => {
    return await urbanizacionModule.findById(idUrbanizacion)
    .populate("apartamentos", "numero piso");
};

exports.actualizarUrbanizacion = async (idUrbanizacion, data) => {
    return await urbanizacionModule.findByIdAndUpdate(idUrbanizacion, data, {new: true});
};