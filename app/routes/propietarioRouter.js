const propietarioController = require("../controllers/propietarioController");

module.exports = router => {
    router
    .route("/propietario")
    .get(propietarioController.obtenerPropietarios)
    .post(propietarioController.crearPropietario);

    router
    .route("/propietario/:id")
    .delete(propietarioController.eliminarPropietario)
    .get(propietarioController.findPropietario)
    .put(propietarioController.actualizarPropietario);
}