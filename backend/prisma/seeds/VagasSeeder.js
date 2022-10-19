const crypto = require("crypto");

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function vagasSeeder() {
    await prisma.vagas.upsert({
        where: { slug: "lorem-ipsum-dolor" },
        update: { updated_at: new Date().toISOString() },
        create: {
            id: crypto.randomBytes(4).toString("HEX"),
            slug: "lorem-ipsum-dolor",
            titulo: "Lorem ispum dolor",
            descricao: "Lorem ipsum dolor lorem ipsum dolor",
            objetivos: "{dummy: \"lorem ispsum dolor\"}",
            candidatos: {
                connect: { slug: "sicrano-santos" },
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
