import { Request, Response, NextFunction } from "express";
import { CategoryRepository } from "./category.repository.js";
import { Category } from "./category.entity.js";

const repository = new CategoryRepository();

function sanitizeCategoryInput(req: Request, res: Response, next: NextFunction){  
  req.body.sanitizeInput ={
    categoryId: req.body.categoryId,
    name: req.body.name,
  }
  //more checks here

  Object.keys(req.body.sanitizeInput).forEach((key) => {
    if(req.body.sanitizeInput[key] === undefined) delete req.body.sanitizeInput[key];
    });

  next();
}

function findAll(req: Request, res: Response){
  res.json({data: repository.findAll()});
};

function findOne(req: Request, res: Response){
  const id = req.params.id;
  const category = repository.findOne({id});
  if (!category) {
    return res.status(404).send({message: 'Category not found!'});
  }
  res.json({data: category});
};

function add(req: Request, res: Response){
  const input = req.body.sanitizeInput;

  const categoryInput = new Category(input.categoryId, input.name); 

  const category = repository.add(categoryInput);
  return res.status(201).send({message: 'Category created!', data: category});  
};

function update(req: Request, res: Response){
  req.body.sanitizeInput.categoryId = req.params.id;
  const category =repository.update(req.body.sanitizeInput);

  if (!category) {
    return res.status(404).send({message: 'Category not found!'});
  }
  return res.status(200).send({message: 'Category updated!', data: category});  
 };

function remove(req: Request, res: Response){
  const id = req.params.id;
  const category = repository.delete({id});
  if (!category) {
    return res.status(404).send({message: 'Category not found!'});
  }
  return res.status(200).send({message: 'Category deleted!', data: category});  
 };

export const controller = {
  sanitizeCategoryInput,
  findAll,
  findOne,
  add,
  update,
  remove
};