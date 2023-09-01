import { Router } from "express";
import { getUsuario, insertUsuario } from "../controllers/v1/usuario.js";


const appUsuario = Router();

appUsuario.post('/login', getUsuario );
appUsuario.post('/register', insertUsuario);

export default appUsuario;