import {Document,PopulatedDoc} from "mongoose";
import type { ITarea } from "./Tarea";

export interface IProyectos extends Document {
    nombre: String
    cliente: String
    descripcion: String
    tareas: PopulatedDoc<ITarea & Document> []
}