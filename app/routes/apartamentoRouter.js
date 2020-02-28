const apartamentoController = require("../controllers/apartamentoController");

module.exports = router => {
  router
    .route("/apartamento")
    .get(apartamentoController.obtenerApartamento)
    .post(apartamentoController.crearApartamento);

  router
    .route("/apartamento/:id")
    .delete(apartamentoController.eliminarApartamento)
    .get(apartamentoController.findApartamento)
    .put(apartamentoController.actualizarApartamento);
};
