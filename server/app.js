import express from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import appUsuario from "./routes/usuario.routes.js";


dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use('/', appUsuario);

console.log(process.env.MY_SERVER);
const config = JSON.parse(process.env.MY_SERVER);
app.listen(config, () => {
    console.log(`http://${config.hostname}:${config.port}`);
});