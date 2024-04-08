import dotenv from "dotenv"
import express from "express"
import {conectarDB} from "./src/config/database.ts";
import routesProyectos from "./src/routes/proyectoRoutes.ts"
import routesTareas from "./src/routes/tareaRoutes.ts"

dotenv.config()
conectarDB()
const app = express()
app.use(express.json())

//todo averiguar las variables de entorno que están en el archivo database
//Rutas
app.use("/api/proyectos",routesProyectos)
app.use("/api/tareas",routesTareas)

export default app