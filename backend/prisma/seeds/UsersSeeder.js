const prisma = require("../singleton");
const crypto = require("crypto");
const bcrypt = require("bcryptjs")

async function userSeeder() {
    await prisma.usuarios.upsert({
        where: { email: "fulano@email.com" },
        update: { updated_at: new Date().toISOString() },
        create: {
            id: crypto.randomBytes(4).toString("HEX"),
            slug: "fulano-da-silva",
            nome: "Fulano da Silva",
            email: "fulano@email.com",
            senha: bcrypt.hashSync("123"),
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
        }
    })
}

module.exports = userSeeder