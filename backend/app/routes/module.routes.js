const { authJwt } = require("../middlewares");
const controller = require("../controllers/module.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get(
    "/api/user/module",
    controller.getModules
  );
  app.get(
    "/api/user/module/:moduleId",
    controller.getModuleById
  );

  app.post(
    "/api/admin/module",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.addModule
  );
};