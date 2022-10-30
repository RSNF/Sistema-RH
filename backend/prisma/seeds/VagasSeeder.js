const prisma = require("../singleton");
const crypto = require("crypto");

async function vagasSeeder() {
    await prisma.vagas.upsert({
        where: { slug: "lorem-ipsum-dolor" },
        update: { updated_at: new Date().toISOString() },
        create: {
            id: crypto.randomBytes(4).toString("HEX"),
            slug: "lorem-ipsum-dolor",
            titulo: "Lorem ispum dolor",
            descricao: "Lorem ipsum dolor lorem ipsum dolor",
            objetivos: JSON.stringify(
                {
                    colOrInd: 0,
                    resOrSoc: 1,
                    IntOrPac: 0,
                    ImpOrVig: 0
                }
            ),
            candidatos: {
                connect: [{ slug: "sicrano-santos" }, { slug: "sicrano-de-santos-2" }],
            },
            usuario: {
                connect: { slug: "fulano-da-silva" },
            },
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
        }
    })
}

module.exports = vagasSeeder
