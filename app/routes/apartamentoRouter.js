const apartamentoController = require("../controllers/apartamentoController");
const authMiddleware = require('../middlewares/authMiddleware');

module.exports = router => {
  router
    .route("/apartamento")
    .get(authMiddleware,apartamentoController.obtenerApartamento)
    .post(apartamentoController.crearApartamento);

  router
    .route("/apartamento/:id")
    .delete(apartamentoController.eliminarApartamento)
    .get(apartamentoController.findApartamento)
    .put(apartamentoController.actualizarApartamento);
};
