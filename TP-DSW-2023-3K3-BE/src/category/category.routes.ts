import { Router } from "express";
import {controller} from "./category.controller.js";

export const categoryRouter = Router();

categoryRouter.get('/', controller.findAll);
categoryRouter.get('/:id', controller.findOne);
categoryRouter.post('/', controller.sanitizeCategoryInput, controller.add);
categoryRouter.put('/:id', controller.sanitizeCategoryInput, controller.update);
categoryRouter.patch('/:id', controller.sanitizeCategoryInput, controller.update);
categoryRouter.delete('/:id', controller.remove);
