const prisma = require("../../prisma/singleton");

module.exports = class Usuario {
    constructor(slug) {
        const result = await prisma.usuarios.findUnique({
            where: { slug: slug }
        });

        this.nome = result["nome"];
        this.email = result["email"];
    }
}

User = new Usuario("fulano-da-silva");

console.log(user)