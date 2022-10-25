const express = require("express");
const cookieParser = require("cookie-parser");
const routes = express.Router();
const userController = require("./controllers/UserController");

routes.use(cookieParser());

// COLOCAR MIDDLEWARES - Talvez
// prisma.$use(async (params, next) => {
//     console.log(params.args)
// })

// COLOCAR ROTAS
routes.get("/users", userController.list)
routes.get("/users/:id", userController.show)
routes.post("/users", userController.create)
routes.post("/login", userController.signIn)
routes.post("/sair", userController.logOut)
routes.get("/check", userController.check)

module.exports = routes;