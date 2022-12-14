const prisma = require("../../prisma/singleton");
const crypto = require("crypto");
const slugification = require("../utils/slugfication");

async function list(_req, res) {
    const { take } = _req.params
    console.log(take)

    if(Number(take)) {
        const result = await prisma.vagas.findMany({
            orderBy: {
                updated_at: 'desc',
            },
            include: {
                candidatos: true
            },
            take: Number(take)
        });

        return res.status(200).json(result);
    }

    const result = await prisma.vagas.findMany({
        orderBy: {
            updated_at: 'desc',
        },
        include: {
            candidatos: true
        }
    });

    return res.status(200).json(result);
}

async function show(req, res) {
    const { id } = req.params;

    const result = await prisma.vagas.findUnique(
        {
            where: { id: id },
            select: {
                id: true,
                slug: true,
                titulo: true,
                descricao: true,
                objetivos: true,
                criadorId: true,
                candidatos: {
                    orderBy: {
                        updated_at: 'asc'
                    },
                    select: {
                        id: true,
                        slug: true
                    }
                },
                created_at: true,
                updated_at: true,
            }
        }
    );

    return res.status(200).json(result);
}

async function create(req, res) {
    // Variável email dever ser um array
    const { userId } = req.params;
    const { titulo, descricao, objetivos, email } = req.body;
    console.log(email)
    const slug = await slugification("Vagas", titulo);
    const created_at = new Date().toISOString();
    const updated_at = new Date().toISOString();

    let slugs = [];
    let result;

    for (const e of email) {
        result = await prisma.candidatos.findFirst(
            {
                where: {
                    email: e,
                },
                select: {
                    slug: true
                }
            }
        )

        slugs = [...slugs, result]
    }

    slugs = slugs.filter((value, index) => {
        const _value = JSON.stringify(value);

        return index === slugs.findIndex(obj => {
            return JSON.stringify(obj) === _value;
        });
    });
    // console.log(slugs)

    await prisma.vagas.create(
        {
            data: {
                id: crypto.randomBytes(4).toString("HEX"),
                titulo: titulo,
                slug: slug,
                candidatos: {
                    connect: slugs 
                },
                criador: {
                    connect: { id: userId }
                },
                descricao: descricao,
                objetivos: JSON.stringify(objetivos),
                created_at: created_at,
                updated_at: updated_at,
            }
        }
    ).catch(async (_e) => {
        console.log(_e)
        res.statusMessage = "Something went wrong!";
        res.statusCode = 500;
    });

    if (res.statusCode != 500) {
        res.statusCode = 202;
    }

    return res.send();
}

async function update(req, res) {
    const { id } = req.params;
    const { titulo, descricao, objetivos, email } = req.body;
    const updated_at = new Date().toISOString();

    let slugs = [];
    let result;

    for (const e of email) {
        result = await prisma.candidatos.findFirst(
            {
                where: { email: e },
                select: {
                    slug: true
                }
            }
        )

        slugs = [...slugs, result]
    }

    slugs = slugs.filter((value, index) => {
        const _value = JSON.stringify(value);

        return index === slugs.findIndex(obj => {
            return JSON.stringify(obj) === _value;
        });
    });

    await prisma.vagas.update(
        {
            where: { id: id },
            data: {
                titulo: titulo,
                descricao: descricao,
                objetivos: JSON.stringify(objetivos),
                candidatos: {
                    connect: slugs
                },
                updated_at: updated_at
            }
        }
    ).catch(async (_e) => {
        res.statusMessage = "Something went wrong when updating, check data!";
        res.statusCode = 500;
    });

    return res.send()
}

async function remove(req, res) {
    const { id } = req.params;

    await prisma.vagas.delete({
        where: { id: id }
    }).catch(async (_e) => {
        res.statusMessage = "Something went wrong!";
        res.statusCode = 500;
    });

    return res.send();
}

module.exports = {
    list,
    show,
    create,
    update,
    remove
}