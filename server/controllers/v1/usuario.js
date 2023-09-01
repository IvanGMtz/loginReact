import { con } from "../../db/atlas.js";

let db = await con();
let usuario = db.collection("usuarios");

export const getUsuario = async (req, res) => {
    try {
        const {username, password} = req.body;
        const user = await usuario.findOne(
            {
                nombre: username
            }
        );
        if (!user) return res.status(404).send("Datos incorrectos");
        if (user.password != password) return res.status(404).send("Ingreso "), console.log("NO entraste");
        console.log("Entraste");
        res.status(200).send(user);
    } catch (error) {
        throw error;
    }
}

export const insertUsuario = async(req, res) =>{
    try {
        const {usernameR, passwordR} = req.body;
        await usuario.insertOne({
        nombre: usernameR,
        password: passwordR
        });
    } catch (error) {
        throw error;
    }
}