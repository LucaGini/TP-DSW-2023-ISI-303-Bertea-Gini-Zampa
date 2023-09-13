import { Router } from "express";
import { controller } from "./province.controller.js";

export const provinceRouter = Router();

provinceRouter.get('/', controller.findAll);
provinceRouter.get('/:id', controller.findOne);
provinceRouter.post('/', controller.sanitizeProvinceInput, controller.add); 
provinceRouter.put('/:id', controller.sanitizeProvinceInput, controller.update);
provinceRouter.patch('/:id', controller.sanitizeProvinceInput, controller.update);
provinceRouter.delete('/:id', controller.remove);