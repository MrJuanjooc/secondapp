const urbanizacionConstroller = require("../controllers/urbanizacionController");

module.exports = router => {
    router
    .route("/urbanizacion")
    .get(urbanizacionConstroller.obtenerUrbanizacion)
    .post(urbanizacionConstroller.crearUrbanizacion);

    router
    .route("/urbanizacion/:id")
    .delete(urbanizacionConstroller.eliminarUrbanizacion)
    .get(urbanizacionConstroller.findUrbanizacion)
    .put(urbanizacionConstroller.actualizarUrbanizacion);
}