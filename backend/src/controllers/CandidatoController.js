const crypto = require("crypto");
const bcrypt = require("bcryptjs")
const slugify = require("slugify")

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = {
    async list(_req, res) {
        const result = await prisma.candidatos.findMany();

        return res.json(...result);
    },
    async show(req, res) {
        const { id } = req.params;

        const result = await prisma.candidatos.findUnique({
            where: { id: id }
        });

        return res.json(result);
    }
}