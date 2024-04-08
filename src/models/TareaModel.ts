import mongoose, { Schema, Types } from "mongoose";
import type { ITarea } from "../interfaces/Tarea";
import { EstadoTarea } from "../common/enum/estados.enum";


const TareaSchema: Schema = new Schema({
    nombre: {
        type: String,
        require: true,
        trim: true
    },
    descripcion:{
        type: String,
        require: true,
        trim: true
    },
    proyecto:{
        type: Types.ObjectId,
        ref: "Proyecto"
    },
    estado: {
        type: String,
        enum: Object.values(EstadoTarea),
        default: EstadoTarea.Pendiente
    }
},
    {
        timestamps:true
    }
)

const Tarea = mongoose.model<ITarea>("Tarea",TareaSchema)
export default Tarea