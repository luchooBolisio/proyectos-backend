import { Request, Response } from "express"
import Proyecto from "../models/ProyectosModel"
import Tarea from '../models/TareaModel';

export const crearTarea = async (req:Request, res:Response) => {
    const {id} = req.params
    const proyecto = await Proyecto.findById(id)
    
    if (!proyecto) {
        return res.status(404).send(`No existe el proyecto con el id: ${id}`)
    }

    const tarea = await new Tarea ({
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        proyecto: proyecto._id
    })
        
    try {
        await tarea.save()
        proyecto.tareas.push(tarea._id)
        await proyecto.save()
        res.send("Tarea creada exitosamente");
    } catch (error) {
        console.error(error);
        res.status(500).send("Error interno del servidor");
    }
}
export const tareas = async (req:Request, res:Response) => {
    const tareas = await Tarea.find()
    if (!tareas) {
        return res.status(404).send("No existen tareas")
    }
    try {
        res.json(tareas)
    } catch (error) {
        console.error(error);
        res.status(500).send("Error interno del servidor");
    }
}
export const tarea = async (req:Request, res:Response) => {
    const {id} = req.params
    const tarea = await Tarea.findById(id)

    if (!tarea) {
        return res.status(404).send("No existe la tarea")
    }

    try {
        res.json(tarea)
    } catch (error) {
        console.error(error);
        res.status(500).send("Error interno del servidor");
    }
}
export const editarTarea = async (req:Request, res:Response) => {
    const {id} = req.params
    const tarea = await Tarea.findByIdAndUpdate(id,req.body)

    if (!tarea) {
        return res.status(404).send(`No existe la tarea con el id: ${id}`)
    }

    try {
        await tarea.save()
        res.send("Tarea actualizado correctamente")
    } catch (error) {
        console.error(error);
        res.status(500).send("Error interno del servidor")
    }
}
export const eliminarTarea = async (req:Request, res:Response) => {
    const {id} = req.params
    const tarea = await Tarea.findById(id)

    if (!tarea) {
        return res.status(404).send(`No existe la tarea con el id: ${id}`)
    }
        
    try {
        await tarea.deleteOne()
        res.send(`La tarea fue eliminada correctamente`)
    } catch (error) {
        console.error(error);
        res.status(500).send("Error interno del servidor")
    }
}
