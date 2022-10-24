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
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
        }
    })
}

module.exports = candidatosSeeder