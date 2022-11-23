const prisma = require("../../prisma/singleton");
const crypto = require("crypto");
const slugification = require("../utils/slugfication");

async function list(_req, res) {
    const result = await prisma.candidatos.findMany();

    return res.status(200).json(result);
}

async function listByVaga(_req, res) {
    const { vagaId }  = _req.params;
    const result = await prisma.vagas.findUnique({
        where: {
            id: vagaId,
        },
        select: {
            candidatos: true,
        }
    });

    return res.status(200).json(result);
}

async function show(req, res) {
    const { id } = req.params;

    const result = await prisma.candidatos.findUnique({
        where: { id: id }
    });

    return res.json(result);
}

async function create(req, res) {
    const { vagaId }  = req.params;
    const { nome, email, tel, perfil } = req.body;
    const slug = await slugification("Candidatos", nome);
    const created_at = new Date().toISOString();
    const updated_at = new Date().toISOString();

    await prisma.candidatos.create({
        data: {
            id: crypto.randomBytes(4).toString("HEX"),
            slug: slug,
            nome: nome,
            email: email,
            vagas: {
                connect: { id: vagaId }
            },
            tel: tel,
            perfil: JSON.stringify(perfil),
            created_at: created_at,
            updated_at: updated_at
        }
    }).catch(async (_e) => {
        res.statusMessage = "Something went wrong when creating!";
        res.statusCode = 500;
    })

    if (res.statusCode != 500) {
        res.statusCode = 202;
    }

    return res.send();
}

async function createNoVaga(req, res) {
    const { nome, email, tel } = req.body;
    
    const slug = await slugification("Candidatos", nome);
    const created_at = new Date().toISOString();
    const updated_at = new Date().toISOString();

    await prisma.candidatos.create({
        data: {
            id: crypto.randomBytes(4).toString("HEX"),
            slug: slug,
            nome: nome,
            email: email,
            perfil: JSON.stringify(
                {
                    colOrInd: (Math.random() * (1 - 0)).toFixed(1),
                    resOrSoc: (Math.random() * (1 - 0)).toFixed(1),
                    IntOrPac: (Math.random() * (1 - 0)).toFixed(1),
                    ImpOrVig: (Math.random() * (1 - 0)).toFixed(1)
                }
            ),
            tel: tel,
            created_at: created_at,
            updated_at: updated_at
        }
    }).catch(async (_e) => {
        console.log(_e)
        res.statusMessage = "Something went wrong when creating!";
        res.statusCode = 500;
    })

    if (res.statusCode != 500) {
        res.statusCode = 202;
    }

    return res.send();
}

async function update(req, res) {
    const { id } = req.params;
    const { nome, email } = req.body;
    const updated_at = new Date().toISOString();

    await prisma.candidatos.update({
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

    await prisma.candidatos.delete({
        where: { id: id }
    }).catch(async (_e) => {
        res.statusMessage = "Something went wrong when deleting, check ID!";
        res.statusCode = 500;
    });

    return res.send();
}

module.exports = {
    list,
    listByVaga,
    show,
    create,
    createNoVaga,
    update,
    remove,
}