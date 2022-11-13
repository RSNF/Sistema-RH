const slugify = require("slugify");
const prisma = require("../../prisma/singleton");

async function slugification(table, value) {

    console.log(value);

    let slug = slugify(value, { lower: true });

    let count = 0;

    if (table == "Usuarios") {
        count = await prisma.$queryRaw`
            SELECT count(nome) as count 
            FROM Usuarios 
            WHERE nome = ${value} COLLATE NOCASE;
        `
    } else if (table == "Vagas") {
        count = await prisma.$queryRaw`
            SELECT count(titulo) as count 
            FROM Vagas 
            WHERE titulo = ${value} COLLATE NOCASE;
        `
    } else if (table == "Candidatos") {
        count = await prisma.$queryRaw`
            SELECT count(nome) as count 
            FROM Candidatos 
            WHERE nome = ${value} COLLATE NOCASE;
        `
    } else {
        throw `Error: Table ${table} not recognized in schema!`
    }

    if (count[0]["count"] > 0) {
        slug = `${slug}-${count[0]["count"]}`
    }

    return slug;
}

module.exports = slugification;