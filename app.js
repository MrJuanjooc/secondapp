const express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  config = require("./app/configs/config.js"),
  router = express.Router(),
  routes = require("./app/routes/index.js"),
  mongoose = require("mongoose");
  errorMiddleware = require('./app/middlewares/errorMiddleware');
  
require ('express-async-errors');
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(bodyParser.json());

routes(router);
app.use("/api", router);

app.use(errorMiddleware);

mongoose.connect(
  "mongodb://" + config.BD_IP + ":" + config.BD_PORT + "/" + config.BD_NAME,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
  },
  err => {
    if (err) {
      console.log("Fallas al conectar, error: " + err);
    }
  }
);

let db = mongoose.connection;
db.on("error", console.error.bind(console, "Error Conexión Base de Datos"));

if (!db) {
  console.log("Error Durante la conexión con la Base de Datos");
} else {
  console.log("Conexión Exitosa a la Base de Datos");
}

app.listen(config.PORT, () => {
  console.log("Escuchando el puerto: " + config.PORT);
});
