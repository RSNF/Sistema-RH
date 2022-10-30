const prisma = require("../singleton");
const crypto = require("crypto");
const bcrypt = require("bcryptjs")

async function candidatosSeeder() {
    await prisma.candidatos.upsert({
        where: { slug: "sicrano-santos" },
        update: { updated_at: new Date().toISOString() },
        create: {
            id: crypto.randomBytes(4).toString("HEX"),
            slug: "sicrano-santos",
            nome: "Sicrano Santos",
            email: "sicrano@email.com",
            tel: "73999999999",
            perfil: JSON.stringify(
                {
                    colOrInd: 1,
                    resOrSoc: 0,
                    IntOrPac: 1,
                    ImpOrVig: 1
                }
            ),
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
        }
    });

    await prisma.candidatos.upsert({
        where: { slug: "sicrano-de-santos" },
        update: { updated_at: new Date().toISOString() },
        create: {
            id: crypto.randomBytes(4).toString("HEX"),
            slug: "sicrano-de-santos-2",
            nome: "Sicrano de Santos",
            email: "sicranoSantos@email.com",
            tel: "73999999999",
            perfil: JSON.stringify(
                {
                    colOrInd: 1,
                    resOrSoc: 0,
                    IntOrPac: 1,
                    ImpOrVig: 1
                }
            ),
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
        }
    });
}

module.exports = candidatosSeeder