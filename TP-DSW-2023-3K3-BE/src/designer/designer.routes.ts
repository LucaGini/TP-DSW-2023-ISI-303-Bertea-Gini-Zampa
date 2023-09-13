import { Router } from "express";
import { controller } from "./designer.controller.js";

export const designerRouter = Router();

designerRouter.get('/', controller.findAll);
designerRouter.get('/:id', controller.findOne);
designerRouter.post('/', controller.sanitizeDesignerInput, controller.add);
designerRouter.put('/:id', controller.sanitizeDesignerInput, controller.update);
designerRouter.patch('/:id', controller.sanitizeDesignerInput, controller.update);
designerRouter.delete('/:id', controller.remove);