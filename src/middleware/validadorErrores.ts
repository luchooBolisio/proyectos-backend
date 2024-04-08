import type { Request,NextFunction,Response } from "express";
import {validationResult} from "express-validator"

export const validadorErrores = (req:Request,res:Response,next:NextFunction) =>{
    let errors = validationResult(req)

    if(!errors.isEmpty()){
        const mensajeErrores = errors.array().map(error => error.msg)
        return res.status(400).json({errors: mensajeErrores})
    }
    next()
}