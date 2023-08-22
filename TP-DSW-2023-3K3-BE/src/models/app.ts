import express, { Request, Response, NextFunction } from 'express';
import { Product } from './product';

const app = express();
app.use(express.json());

const products: Product[] = [
  new Product(1, 'Darth Vader', 'Big Darth Vader mask printed in 3d with resin.', 10, 'Resin', 1, '20-12345678-9'),
];

function sanitizeProductInput(req: Request, res: Response, next: NextFunction){

  req.body.sanitizeInput ={
    name: req.body.name,
    description: req.body.description,
    stock: req.body.stock,
    material: req.body.material,
    categoryId: req.body.categoryId,
    cuil: req.body.cuil,
  }
  //more checks here

  Object.keys(req.body.sanitizeInput).forEach((key) => {
    if(req.body.sanitizeInput[key] === undefined) delete req.body.sanitizeInput[key];
    });

  next();

  };

app.get('/api/product', (req, res) => {
  res.json({data: products});
});

app.use('/', (req, res) => {
  res.json({message: '<h1>Hello World!</h1>'});
});

app.get('/api/product/:productId', (req, res) => {
  const product = products.find((product) => product.productId === parseInt(req.params.productId));
  if (!product) {
    return res.status(404).send({message: 'Product not found!'});
  }
  res.json({data: product});
});

app.post('/api/product', sanitizeProductInput, (req, res) => {
  const input = req.body.sanitizeProductInput;

  const newProduct = new Product(
    input.productId, //tira error si saco el id, tengo que sacarlo del constructor o hacer otra cosa? Ask Meca
    input.name, 
    input.description,
    input.stock, 
    input.material, 
    input.categoryId, 
    input.cuil);

  products.push(newProduct);
  return res.status(201).json({message: 'Product inserted.', data: newProduct});
});

app.put('/api/product/:productId',  sanitizeProductInput,(req, res) => {
  const productIdx = products.findIndex((product) => product.productId === parseInt(req.params.productId));

  if(productIdx === -1){
    return res.status(404).send({message: 'Product not found!'});
  }
  const {name, description, stock, material, categoryId, cuil} = req.body;
  products[productIdx] = {...products[productIdx], ...req.body.sanitizeInput};
  res.status(200).json({message: 'Product updated successfully.', data: products[productIdx]});
});

app.patch('/api/product/:productId',  sanitizeProductInput,(req, res) => {
  const productIdx = products.findIndex((product) => product.productId === parseInt(req.params.productId));

  if(productIdx === -1){
    return res.status(404).send({message: 'Product not found!'});
  }
  const {name, description, stock, material, categoryId, cuil} = req.body;
  products[productIdx] = {...products[productIdx], ...req.body.sanitizeInput};
  res.status(200).json({message: 'Product updated successfully.', data: products[productIdx]});
});

app.delete('/api/product/:productId', (req, res) => {
  const productIdx = products.findIndex((product) => product.productId === parseInt(req.params.productId));

  if(productIdx === -1){
    return res.status(404).send({message: 'Product not found!'});
  }else{
  products.splice(productIdx, 1);
  res.status(200).json({message: 'Product deleted successfully.'});
}});

app.use((_, res) => {
  return res.status(404).send({message: 'Resource not found!'});
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000/');
}); //ask meca why port is not running/is malfunctioning
    //the system does not recognize the command start:dev, so I can't run the server