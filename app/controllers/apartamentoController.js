const apartamentoService = require("../services/apartamentoService");

exports.obtenerApartamento = async (req, res) => {
  let getResult = await apartamentoService.obtenerApartamento();
  res.status(200).send(getResult);
};

exports.crearApartamento = async (req, res) => {
  const apartamento = req.body;
  const urbanizacion = req.body.urbanizacion;
  const propietario = req.body.propietario;

  let addResult = await apartamentoService.crearApartamento(
    apartamento,
    urbanizacion,
    propietario
  );
  res.status(200).send(addResult);
};

exports.eliminarApartamento = async (req, res) => {
  try {
    const idApartamento = req.params.id;

    let deleteResult = await apartamentoService.eliminarApartamento(
      idApartamento
    );

    if (!deleteResult) {
      res.status(404).send({ error: "Apartamento No Encontrado" });
    } else {
      res.status(200).send(deleteResult);
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.findApartamento = async (req, res) => {
  try {
    let idApartamento = req.params.id;
    const findResult = await apartamentoService.findApartamento(idApartamento);

    if (!findResult) {
      res.status(404).send({ error: "Apartamento No Encontrado" });
    } else {
      res.status(200).send(findResult);
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.actualizarApartamento = async (req, res) => {
  try {
    const idApartamento = req.params.id;
    const data = req.body;

    let putResult = await apartamentoService.actualizarApartamento(
      idApartamento,
      data
    );
    if (!putResult) {
      res.status(404).send({ error: "Apartamento No Encontrado" });
    } else {
      res.status(200).send(putResult);
    }
  } catch (err) {
    res.status(500).send(err);
  }
};
