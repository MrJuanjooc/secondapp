const propietario = require("../routes/propietarioRouter"),
  apartamento = require("../routes/apartamentoRouter"),
  urbanizacion = require("../routes/urbanizacionRouter"),
  auth = require("../routes/authRouter");

module.exports = router => {
  propietario(router), apartamento(router), urbanizacion(router), auth(router);
};
