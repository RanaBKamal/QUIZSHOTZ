const { authJwt } = require("../middlewares");
const controller = require("../controllers/question.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get(
    "/api/admin/question/:questionId",
    controller.getQuestion
  );
  app.get(
    "/api/admin/questions/:moduleId",
    controller.getQuestions
  );

  app.post(
    "/api/admin/question",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.addQuestion
  );
};