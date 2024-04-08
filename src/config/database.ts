import mongoose from "mongoose"
import {exit} from "node:process"

export const conectarDB = async () => {
    try {
        const conectar = await mongoose.connect(process.env.DATABASE_MONGO);
        console.log(`La base de datos está conectada en el puerto ${conectar.connection.port}`);
    } catch (error) {
        console.log(error);
        exit(1);
    }
};