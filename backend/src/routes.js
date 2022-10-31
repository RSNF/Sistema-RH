const express = require("express");
const cookieParser = require("cookie-parser");
const routes = express.Router();
const userController = require("./controllers/UserController");
const CandidatoController = require("./controllers/CandidatoController");
const VagaController = require("./controllers/VagaController");

routes.use(cookieParser());

// COLOCAR MIDDLEWARES - Talvez
// prisma.$use(async (params, next) => {
//     console.log(params.args)
// })

// COLOCAR ROTAS

// Rotas Usuário
routes.get("/users", userController.list)
routes.get("/users/:id", userController.show)
routes.post("/users", userController.create)
routes.put("/users/:id", userController.update)
routes.delete("/users/:id", userController.remove)
routes.post("/login", userController.signIn)
routes.post("/logout", userController.logOut)
routes.get("/check", userController.check)

// Rotas Candidato
routes.get("/candidatos", CandidatoController.list);
routes.get("/candidatos/:id", CandidatoController.show);
routes.post("/candidatos/:vagaId", CandidatoController.create)
routes.put("/candidatos/:id", CandidatoController.update)
routes.delete("/candidatos/:id", CandidatoController.remove)

// Rotas Vagas
routes.get("/vagas", VagaController.list);
routes.get("/vagas/:id", VagaController.show);
routes.post("/vagas/:userId", VagaController.create);
routes.put("/vagas/:id", VagaController.update)
routes.delete("/vagas/:id", VagaController.remove)

module.exports = routes;