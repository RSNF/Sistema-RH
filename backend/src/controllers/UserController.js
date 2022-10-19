const crypto = require("crypto");
const bcrypt = require("bcryptjs");
const slugify = require("slugify");
const jwt = require("jsonwebtoken");
const SECRET = "123";

const { PrismaClient } = require("@prisma/client");
const { nextTick } = require("process");

const prisma = new PrismaClient();

module.exports = {
  async list(_req, res) {
    const result = await prisma.usuarios.findMany();

    return res.json(...result);
  },
  async show(req, res) {
    const { id } = req.params;

    const result = await prisma.usuarios.findUnique({
      where: { id: id },
    });

    return res.json(result);
  },
  async signIn(req, res, next) {
    try {
      const token = authorization.split(" ")[1];

      const payload = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
      req.payload = payload;
    } catch (err) {
      res.status(401);
      if (err.email === "TokenExpiredError") {
        throw new Error(err.email);
      }
      throw new Error("🚫 Un-Authorized 🚫");
    }

    return next();
  } /*
  async signIn(req, res, next) {
    const { email, senha } = req.body;
    const user = await prisma.usuarios.findUnique({
      where: {
        email: email,
      },
    });

    if (!user) {
      const token = req.headers["x-access-token"];
      jwt.verify(token, SECRET, (err, decoded) => {
        if (err) return res.status(401).end();

        req._users = decoded._users;
        next();
      });
    } else {
      const checkPassword = bcrypt.compareSync(senha, user.senha);

      if (!checkPassword) {
        console.error("Email address or password not valid");
      }
    }

    delete user.senha;

    return res.json(user);
  },*/,
  async create(req, res) {
    const { nome, email, senha } = req.body;
    const slug = slugify(nome, { lower: true });
    const created_at = new Date().toISOString();
    const updated_at = new Date().toISOString();

    await prisma.usuarios
      .create({
        data: {
          id: crypto.randomBytes(4).toString("HEX"),
          slug: slug,
          nome: nome,
          email: email,
          senha: bcrypt.hashSync(senha),
          created_at: created_at,
          updated_at: updated_at,
        },
      })
      .then(async (_users, callback = () => {}) => {
        await prisma.$disconnect();
        callback(res.status(200).send());
      })
      .catch(async (e, callback = () => {}) => {
        console.error(e);
        await prisma.$disconnect();
        callback(res.status(500).send());
        process.exit(1);
      });
  },
};
