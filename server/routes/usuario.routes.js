import { Router } from "express";
import { getUsuario, insertUsuario } from "../controllers/v1/usuario.js";
import { insertUsuarioV2 } from "../controllers/v2/usuario.js";
import routesVersioning from 'express-routes-versioning';

const appUsuario = Router();
const version = routesVersioning();

appUsuario.post('/login', version({
    "^1.0.0": getUsuario,
    "~2.2.1": insertUsuarioV2

}));
appUsuario.post('/register', insertUsuario);

export default appUsuario;