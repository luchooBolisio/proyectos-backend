import { Request, Response } from "express";
import Proyecto from "../models/ProyectosModel";

export const crearProyecto = async (req: Request, res: Response) => {
    try {
        const proyecto = new Proyecto(req.body);
        await proyecto.save();
        res.status(201).send("El proyecto fue creado satisfactoriamente");
    } catch (error) {
        console.error(error);
        res.status(500).send("Error interno del servidor");
    }
};

export const todosProyectos = async (req: Request, res: Response) => {
    try {
        const proyectos = await Proyecto.find();
        res.json(proyectos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error interno del servidor" });
    }
};
export const unProyecto = async (req: Request, res: Response) => {
    const { id } = req.params;
    const proyecto = await Proyecto.findById(id);

    if (!proyecto) {
        return res.status(404).send(`No existe el proyecto con el id: ${id}`);
    }

    try {
        res.json({ proyecto });
    } catch (error) {
        console.error(error);
        res.status(500).send("Error interno del servidor");
    }
};
export const editarProyecto = async (req: Request, res: Response) => {
    const { id } = req.params;
    const proyecto = await Proyecto.findByIdAndUpdate(id, req.body);

    if (!proyecto) {
        return res.status(404).send(`No existe el proyecto con el id: ${id}`);
    }

    try {
        await proyecto.save();
        res.send("Proyecto actualizado correctamente");
    } catch (error) {
        console.error(error);
        res.status(500).send("Error interno del servidor");
    }
};
export const eliminarProyecto = async (req: Request, res: Response) => {
    const { id } = req.params;
    const proyecto = await Proyecto.findById(id);

    if (!proyecto) {
        return res.status(404).send(`No existe el proyecto con el id: ${id}`);
    }

    try {
        await proyecto.deleteOne();
        res.send(`El proyecto fue eliminado correctamente`);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error interno del servidor");
    }
};
