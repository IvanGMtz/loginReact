import { con } from "../../db/atlas.js";

let db = await con();
let usuario = db.collection("usuarios");


export const insertUsuarioV2 = async(req, res) =>{
   console.log(":)")
}