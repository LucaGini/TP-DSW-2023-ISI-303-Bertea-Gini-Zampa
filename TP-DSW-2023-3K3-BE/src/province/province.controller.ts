import { Request, Response, NextFunction } from "express";
import { ProvinceRepository } from "./province.repository.js";
import { Province } from "./province.entity.js";

const repository = new ProvinceRepository();

function sanitizeProvinceInput(req: Request, res: Response, next: NextFunction){
  
    req.body.sanitizeInput ={
      provinceId: req.body.provinceId,
      name: req.body.name,
    }
    //more checks here
  
    Object.keys(req.body.sanitizeInput).forEach((key) => {
      if(req.body.sanitizeInput[key] === undefined) delete req.body.sanitizeInput[key];
      });
  
    next();
  
};

function findAll(req: Request, res: Response){
  res.json({data: repository.findAll()});
};

function findOne(req: Request, res: Response){
  const id = req.params.id;
  const province = repository.findOne({id});
  if (!province) {
    return res.status(404).send({message: 'Province not found!'});
  }
  res.json({data: province});
};

function add(req: Request, res: Response){
  const input = req.body.sanitizeInput;

  const provinceInput = new Province(input.provinceId, input.name);

  const province = repository.add(provinceInput);
  return res.status(201).send({message: 'Province created!', data: province});  

};

function update(req: Request, res: Response){
  req.body.sanitizeInput.provinceId = req.params.id;
  const province =repository.update(req.body.sanitizeInput);

  if (!province) {
    return res.status(404).send({message: 'Province not found!'});
  }
  return res.status(200).send({message: 'Province updated!', data: province});  
 };

function remove(req: Request, res: Response){
  const id = req.params.id;
  const province = repository.delete({id});
  if (!province) {
    return res.status(404).send({message: 'Province not found!'});
  }else{
    return res.status(200).send({message: 'Province deleted!', data: province});  
  }
};

export const controller = { 
  sanitizeProvinceInput, 
  findAll, 
  findOne,
  add,
  update,
  remove
};