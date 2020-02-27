const urbanizacionService = require("../services/urbanizacionService");

exports.obtenerUrbanizacion = async (req, res) => {
  try {
    let getResult = await urbanizacionService.obtenerUrbanizacion();
    res.status(200).send(getResult);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.crearUrbanizacion = async (req, res) => {
  try {
    const urbanizacion = req.body;

    let addResult = await urbanizacionService.crearUrbanizacion(urbanizacion);
    res.status(200).send(addResult);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.eliminarUrbanizacion = async (req, res) => {
  try {
    const idUrbanizacion = req.params.id;

    let deleteResult = await urbanizacionService.eliminarUrbanizacion(
      idUrbanizacion
    );

    if (!deleteResult) {
      res.status(404).send({ error: "Urbanizacion No Encontrada" });
    } else {
      res.status(200).send(deleteResult);
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.findUrbanizacion = async (req, res) => {
  try {
    const idUrbanizacion = req.params.id;
    let findResult = await urbanizacionService.findUrbanizacion(idUrbanizacion);
    if (!findResult) {
      res.status(404).send({ error: "Urbanizacion No Encontrada" });
    } else {
      res.status(200).send(findResult);
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.actualizarUrbanizacion = async (req, res) => {
  try {
    const idUrbanizacion = req.params.id,
      data = req.body;

    let putResult = await urbanizacionService.actualizarUrbanizacion(
      idUrbanizacion,
      data
    );
    if (!putResult) {
      res.status(404).send({ error: "Urbanizacion No Encontrada" });
    } else {
      res.status(200).send(putResult);
    }
  } catch (err) {
    res.status(500).send(err);
  }
};
