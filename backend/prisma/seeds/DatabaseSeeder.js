const usersSeeder = require("./UsersSeeder")
const vagasSeeder = require("./VagasSeeder")

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function seeder() {
    await usersSeeder()
    await vagasSeeder()
}

seeder().then(async () => {
    await prisma.$disconnect()
}).catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
})