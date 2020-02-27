const propietarioService = require("../services/propietarioService");

exports.obtenerPropietarios = async (propietario, res) => {
  try {
    getResult = await propietarioService.obtenerPropietarios(propietario);
    res.status(200).send(getResult);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.crearPropietario = async (req, res) => {
  try {
    const idPropietario = req.body;

    postResult = await propietarioService.crearPropietario(idPropietario);
    res.status(200).send(postResult);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.eliminarPropietario = async (req, res) => {
  try {
    const idPropietario = req.params.id;
    deleteResult = await propietarioService.eliminarPropietario(idPropietario);

    if (!deleteResult) {
      res.status(404).send({ error: "Propietario No Encontrado" });
    } else {
      res.status(200).send(deleteResult);
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.findPropietario = async (req, res) => {
  try {
    const idPropietario = req.params.id;
    let findResult = await propietarioService.findPropietario(idPropietario);

    if (!findResult) {
      res.status(404).send({ error: "Propietario No Encontrado" });
    } else {
      res.status(200).send(findResult);
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.actualizarPropietario = async (req, res) => {
  const idPropietario = req.params.id;
  const data = req.body;
  try {
    let putResult = await propietarioService.actualizarPropietario(
      idPropietario,
      data
    );

    if (!putResult) {
      res.status(404).send({ error: "Propietario No Encontrado" });
    } else {
      res.status(200).send(putResult);
    }
  } catch (err) {
    res.status(500).send(err);
  }
};
