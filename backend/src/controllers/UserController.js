const prisma = require("../../prisma/singleton");
const crypto = require("crypto");
const bcrypt = require("bcryptjs");
const slugify = require("slugify");
const jwt = require("jsonwebtoken");

module.exports = {
    async list(_req, res) {
        const result = await prisma.usuarios.findMany();

        return res.json(...result);
    },
    async show(req, res) {
        const { id } = req.params;

        const result = await prisma.usuarios.findUnique({
            where: { id: id },
        });

        return res.json(result);
    },
    async signIn(req, res) {
        const { email, senha } = req.body;

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

        let jwtSecretKey = process.env.JWT_SECRET_KEY;

        delete user.senha;

        const token = jwt.sign({ id: user.id }, jwtSecretKey)

        res.cookie("auth-token", token, { maxAge: 1800000 });

        return res.json(user);
    },
    async create(req, res) {
        const { nome, email, senha } = req.body;
        const slug = slugify(nome, { lower: true });
        const created_at = new Date().toISOString();
        const updated_at = new Date().toISOString();

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
        })
    },
    async check(req, res) {
        const cookies = req.cookies;

        const data = jwt.decode(cookies["auth-token"]);

        return res.send(data);
    }
};
