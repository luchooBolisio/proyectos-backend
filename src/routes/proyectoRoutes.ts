import { Router } from "express";
import {body,param} from "express-validator"
import { 
        crearProyecto,
        editarProyecto,
        eliminarProyecto,
        todosProyectos,
        unProyecto 
} from "../controllers/proyectoControllers";
import { validadorErrores } from "../middleware/validadorErrores";

const router = Router()

router.post('/',
   body("nombre").notEmpty().withMessage("El nombre no puede estar vacio"),
   body("cliente").notEmpty().withMessage("El cliente no puede estar vacio"),
   body("descripcion").notEmpty().withMessage("La descripción no puede estar vacia"),
   validadorErrores,
   crearProyecto
)

router.get('/',todosProyectos)

router.get('/:id',
    param("id").isMongoId().withMessage("ID no válido"),
    validadorErrores,
    unProyecto
)

router.put('/:id',
    body("nombre").notEmpty().withMessage("El nombre no puede estar vacio"),
    body("cliente").notEmpty().withMessage("El cliente no puede estar vacio"),
    body("descripcion").notEmpty().withMessage("La descripción no puede estar vacia"),
    validadorErrores,
    editarProyecto
)

router.delete('/:id',
    param("id").isMongoId().withMessage("ID no válido"),
    validadorErrores,
    eliminarProyecto
)

export default router