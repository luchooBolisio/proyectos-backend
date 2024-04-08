import mongoose, { Schema, Types } from "mongoose";
import type { IProyectos } from "../interfaces/Proyecto";

const ProyectoSchema: Schema = new Schema({
    nombre: {
        type: String,
        require: true,
        trim: true
    },
    cliente: {
        type: String,
        require: true,
        trim: true
    },
    descripcion:{
        type: String,
        require: true,
        trim: true
    },
    tareas: [
        {
            type: Types.ObjectId,
            ref: "Tareas"
        }
    ]
},
{
    timestamps:true
})

const Proyecto = mongoose.model<IProyectos>("Proyecto",ProyectoSchema)
export default Proyecto