const express = require("express");
const dotenv = require("dotenv");
const routes = require("./routes");
const cors = require("cors");

const app = express();

dotenv.config();
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }))
app.use(express.json());
app.use(routes);

app.listen(3005);