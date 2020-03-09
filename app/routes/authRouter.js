const authController = require("../controllers/authController");

module.exports = router => {
  router.route("/login").post(authController.login);

  router.route("/autenticar").post(authController.autenticar);

  router.route('/signup').post(authController.singUp);
};
