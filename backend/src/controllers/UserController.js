const prisma = require("../../prisma/singleton");
const crypto = require("crypto");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const slugification = require("../utils/slugfication");

async function list(_req, res) {
    const result = await prisma.usuarios.findMany();

    return res.status(200).json(result);
}

async function show(req, res) {
    const { id } = req.params;

    const result = await prisma.usuarios.findUnique({
        where: { id: id },
    });

    return res.status(200).json(result);
}

async function signIn(req, res) {
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
        maxAge: 1800000
    });

    const userInfo = {nome:user.nome, email:user.email, }

    return res.status(200).json(userInfo);
}

async function logOut(_req, res) {
    res.clearCookie('auth-token');

    return res.status(200).send();
}

async function create(req, res) {
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
        res.statusMessage = "Something went wrong when creating!";
        res.statusCode = 500;
    });

    if (res.statusCode != 500) {
        res.statusCode = 202;
    }

    return res.send();
}

async function update(req, res) {
    const { id } = req.params;
    const { nome, email } = req.body;
    const updated_at = new Date().toISOString();

    await prisma.usuarios.update({
        where: { id: id },
        data: {
            nome: nome,
            email: email,
            updated_at: updated_at
        }
    }).catch(async (_e) => {
        res.statusMessage = "Something went wrong when updating, check data!";
        res.statusCode = 500;
    });

    return res.send();
}

async function remove(req, res) {
    const { id } = req.params;

    await prisma.usuarios.delete({
        where: { id: id }
    }).catch(async (_e) => {
        res.statusMessage = "Something went wrong when deleting, check ID!";
        res.statusCode = 500;
    });

    return res.send();
}

async function check(req, res) {
    const cookies = req.cookies;
    const data = jwt.decode(cookies["auth-token"]);

    if(!data){
        console.error("Usuário não autenticado!");

        res.statusMessage = "Usuário não autenticado!";
        return null;
    }

    const user = await prisma.usuarios.findUnique({
        where: {
            id: data.id,
        },
    });

    delete user.senha;

    const userInfo = {nome:user.nome, email:user.email}

    return res.status(202).send(userInfo);
}

module.exports = {
    list,
    show,
    signIn,
    logOut,
    create,
    update,
    remove,
    check
};