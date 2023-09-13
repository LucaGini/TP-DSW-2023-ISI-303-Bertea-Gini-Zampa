import { Repository } from "../shared/repository.js";
import { Product } from "./product.entity.js";
import { sanitizeProductInput } from "../shared/sanitizing.functions.js";
import { ProductRepository } from "./product.repository.js";
import { Router, Request, Response, NextFunction } from 'express';

export class ProductController{
  constructor(private repo: Repository<Product> = new ProductRepository){}

  public sanitizeProductInput(req: Request, res: Response, next: NextFunction){

  req.body.sanitizeInput ={
    name: req.body.name,
    description: req.body.description,
    stock: req.body.stock,
    material: req.body.material,
    categoryId: req.body.categoryId,
    client: req.body.client,
  }
  //more checks here

  Object.keys(req.body.sanitizeInput).forEach((key) => {
    if(req.body.sanitizeInput[key] === undefined) delete req.body.sanitizeInput[key];
    });

  next();

  }

  public findAll((req: Request, res: Response) => {
  return res.json({this.repo.findAll()});
});
}