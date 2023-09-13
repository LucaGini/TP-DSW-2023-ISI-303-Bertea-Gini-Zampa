import {Request, Response, NextFunction} from 'express';
import { DesignerRepository } from './designer.repository.js';
import { Designer } from './designer.entity.js';

const repository = new DesignerRepository();

function sanitizeDesignerInput(req: Request, res: Response, next: NextFunction){
  
    req.body.sanitizeInput ={
      cuil: req.body.cuil,
      name: req.body.name,
      surname: req.body.surname,
      phone: req.body.phone,
      email: req.body.email,
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
  const designer = repository.findOne({id});
  if (!designer) {
    return res.status(404).send({message: 'Designer not found!'});
  }
  res.json({data: designer});
};

function add(req: Request, res: Response){
  const input = req.body.sanitizeInput;

  const designerInput = new Designer(input.cuil, input.name, input.surname, input.phone, input.email);

  const designer = repository.add(designerInput);
  return res.status(201).send({message: 'Designer created!', data: designer});  

};

function update(req: Request, res: Response){
  req.body.sanitizeInput.cuil = req.params.id;
  const designer =repository.update(req.body.sanitizeInput);

  if (!designer) {
    return res.status(404).send({message: 'Designer not found!'});
  }
  return res.status(200).send({message: 'Designer updated!', data: designer});  
 };

function remove(req: Request, res: Response){
  const id = req.params.id;
  const designer = repository.delete({id});
  if (!designer) {
    return res.status(404).send({message: 'Designer not found!'});
  }
  return res.status(200).send({message: 'Designer deleted!', data: designer});  
 };

export const controller = {
  sanitizeDesignerInput,
  findAll,
  findOne,
  add,
  update,
  remove
};

