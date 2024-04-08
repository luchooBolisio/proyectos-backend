import { Router } from "express";
import {body,param} from "express-validator"
import { crearTarea, editarTarea, eliminarTarea, tarea, tareas } from "../controllers/tareaControllers";
import { validadorErrores } from "../middleware/validadorErrores";

const router = Router()

router.post("/:id",
   param("id").isMongoId().withMessage("ID no válido"),
   body("nombre").notEmpty().withMessage("El nombre no puede estar vacio"),
   body("descripcion").notEmpty().withMessage("El cliente no puede estar vacio"),
   validadorErrores,
   crearTarea
)

router.get("/",tareas)

router.get("/:id",
   param("id").isMongoId().withMessage("ID no válido"),
   tarea
)

router.put("/:id",
   param("id").isMongoId().withMessage("ID no válido"),
   validadorErrores,
   editarTarea
)

router.delete("/:id",
   param("id").isMongoId().withMessage("ID no válido"),
   validadorErrores,
   eliminarTarea
)

export default router