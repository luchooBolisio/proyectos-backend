import {Document, Types} from "mongoose";

export interface ITarea extends Document {
    name: String
    descripcion: String
    proyecto: Types.ObjectId

}