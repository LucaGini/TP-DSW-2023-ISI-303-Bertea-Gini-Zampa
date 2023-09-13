import { Router } from "express";
import { controller } from "./discount.controller.js";

export const discountRouter = Router();

discountRouter.get('/', controller.findAll);
discountRouter.get('/:id', controller.findOne);
discountRouter.post('/', controller.sanitizeDiscountInput, controller.add);
discountRouter.put('/:id', controller.sanitizeDiscountInput, controller.update);
discountRouter.patch('/:id', controller.sanitizeDiscountInput, controller.update);
discountRouter.delete('/:id', controller.remove);

