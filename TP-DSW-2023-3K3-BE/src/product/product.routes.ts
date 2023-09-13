import {Product} from './product.entity.js';
import { Repository } from '../shared/repository.js';
import { ProductRepository } from '../product/product.repository.js';
import { Router, Request, Response } from 'express';
import { sanitizeProductInput } from '../shared/sanitizing.functions.js';

const repo: Repository<Product> = new ProductRepository();

export const productRouter = Router();

productRouter.get('/', (req, res) => {
  return res.json({data: repo.find()});
});

productRouter.get('/:productId', (req, res) => {
  const product = repo.find({id: parseInt(req.params.productId)});
  if (!product) {
    return res.status(404).send({message: 'Product not found!'});
  }
  res.json({data: product});
});

productRouter.post('/', sanitizeProductInput, (req, res) => {
  const input = req.body.sanitizeProductInput;

  const newProduct = new Product(
    input.productId, //tira error si saco el id, tengo que sacarlo del constructor o hacer otra cosa? Ask Meca
    input.name, 
    input.description,
    input.stock, 
    input.material, 
    input.categoryId, 
    input.client);

  repo.add(newProduct);
  return res.status(201).json({message: 'Product inserted.', data: newProduct});
});

productRouter.put('/:productId',  sanitizeProductInput,(req, res) => {
  const product = repo.find({id: parseInt(req.params.productId)});

  if(!product){
    return res.status(404).send({message: 'Product not found!'});
  }
  const {name, description, stock, material, categoryId, client} = req.body;
  repo.update({...product, ...req.body.sanitizeInput});
  res.status(200).json({message: 'Product updated successfully.', data: product});
  //products[product] = {...products[product], ...req.body.sanitizeInput};
  //res.status(200).json({message: 'Product updated successfully.', data: products[product]});
});

productRouter.patch('/:productId',  sanitizeProductInput,(req, res) => {
  const product = repo.find({id: parseInt(req.params.productId)});

  if(!product){
    return res.status(404).send({message: 'Product not found!'});
  }
  const {name, description, stock, material, categoryId, client} = req.body;
  repo.update({...product, ...req.body.sanitizeInput});
  res.status(200).json({message: 'Product updated successfully.', data: product});
  //products[productIdx] = {...products[productIdx], ...req.body.sanitizeInput};
  //res.status(200).json({message: 'Product updated successfully.', data: products[productIdx]});
});

productRouter.delete('/:productId', (req, res) => {
  const product = repo.find({id: parseInt(req.params.productId)});

  if(!product){
    return res.status(404).send({message: 'Product not found!'});
  }else{
  repo.delete({id: parseInt(req.params.productId)});
  res.status(200).json({message: 'Product deleted successfully.'});
  //products.splice(productIdx, 1);
  //res.status(200).json({message: 'Product deleted successfully.'});
}});
