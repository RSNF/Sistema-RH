const prisma = require("../../prisma/singleton");
const crypto = require("crypto");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const slugification = require("../utils/slugfication");

module.exports = {
    async list(_req, res) {
        const result = await prisma.usuarios.findMany();

        return res.status(200).json(result);
    },
    async show(req, res) {
        const { id } = req.params;

        const result = await prisma.usuarios.findUnique({
            where: { id: id },
        });

        return res.status(200).json(result);
    },
    async signIn(req, res) {
        const { email, senha, checkbox } = req.body;

        const user = await prisma.usuarios.findUnique({
            where: {
                email: email,
            },
        });

        if (!user) {
            console.error("User cannot be found!");

            res.statusMessage = "User cannot be found!";
            return res.status(404).send();
        } else {
            const checkPassword = bcrypt.compareSync(senha, user.senha);

            if (!checkPassword) {
                res.statusMessage = "Email address or password not valid!";
                return res.status(400).send();
            }
        }

        const jwtSecretKey = process.env.JWT_SECRET_KEY;

        delete user.senha;

        const token = jwt.sign({ id: user.id }, jwtSecretKey)

        res.cookie("auth-token", token, {
            httpOnly: true,
            maxAge: 1800000
        });

        return res.status(200).json(user);
    },
    async logOut(_req, res) {
        res.clearCookie('auth-token');

        return res.status(200).send();
    },
    async create(req, res) {
        const { nome, email, senha } = req.body;
        const slug = await slugification("Usuarios", nome);
        const created_at = new Date().toISOString();
        const updated_at = new Date().toISOString();

        const result = await prisma.usuarios.findUnique({
            select: {
                email: true
            },
            where: {
                email: email,
            }
        })

        if (result) {
            res.statusMessage = "Email address already exists!";
            return res.status(400).send();
        } 

        await prisma.usuarios.create({
            data: {
                id: crypto.randomBytes(4).toString("HEX"),
                slug: slug,
                nome: nome,
                email: email,
                senha: bcrypt.hashSync(senha),
                created_at: created_at,
                updated_at: updated_at,
            },
        }).catch(async (_e) => {
            res.statusMessage = "Something went wrong!";
            res.statusCode = 500;
        })

        if (res.statusCode != 500) {
            res.statusCode = 202;
        }

        return res.send();
    },
    async check(req, res) {
        const cookies = req.cookies;

        const data = jwt.decode(cookies["auth-token"]);

        return res.send(data);
    }
};
