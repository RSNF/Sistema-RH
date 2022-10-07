const express = require("express");
const routes = express.Router();
const userController = require("./controllers/UserController");

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// COLOCAR MIDDLEWARES - Talvez
// prisma.$use(async (params, next) => {
//     console.log(params.args)
// })

// COLOCAR ROTAS
routes.get("/users", userController.list)
routes.get("/users/:id", userController.show)
routes.post("/users", userController.create)

module.exports = routes;