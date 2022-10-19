const crypto = require("crypto");
const bcrypt = require("bcryptjs")
const slugify = require("slugify")

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = {
    async list(_req, res) {
        const result = await prisma.users.findMany();

        return res.json(...result);
    },
    async show(req, res) {
        const { id } = req.params;

        const result = await prisma.users.findUnique({
            where: { id: id }
        });

        return res.json(result);
    },
    async signIn(req, res) {
        const { email, senha } = req.body;

        const user = await prisma.users.findUnique({
            where: {
                email: email
            }
        });
        
        if (!user) {
            console.error('User not registered')
        } else {
            const checkPassword = bcrypt.compareSync(senha, user.senha);

            if (!checkPassword) {
                console.error('Email address or password not valid')
            } 
        }

        delete user.senha;

        return res.json(user);
    },
    async create(req, res) {
        const { nome, email, senha, } = req.body;
        const slug = slugify(nome, { lower: true });
        const created_at = new Date().toISOString();
        const updated_at = new Date().toISOString();

        await prisma.users.create({
            data: {
                id: crypto.randomBytes(4).toString("HEX"),
                slug: slug,
                nome: nome,
                email: email,
                senha: bcrypt.hashSync(senha),
                created_at: created_at,
                updated_at: updated_at
            }
        }).then(async (_users, callback = () => { }) => {
            await prisma.$disconnect();
            callback(res.status(200).send());
        }).catch(async (e, callback = () => { }) => {
            console.error(e);
            await prisma.$disconnect();
            callback(res.status(500).send());
            process.exit(1);
        })
    }
}