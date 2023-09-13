import express, { Request, Response, NextFunction} from 'express';
//import { Product } from '../product/product.entity.js';
//import cors from 'cors';
//import { productRouter } from '../product/product.routes.js';
import { provinceRouter } from '../province/province.routes.js';
import { categoryRouter } from '../category/category.routes.js';


const app = express();
app.use(express.json());

app.use('/api/provinces', provinceRouter);
app.use('/api/categories', categoryRouter);


app.use((_, res) => {
  return res.status(404).send({message: 'Resource not found!'});
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000/');
});




/*const products: Product[] = [
  new Product(1, 'Darth Vader', 'Big Darth Vader mask printed in 3d with resin.', 10, 'Resin', 1, '20-12345678-9'),
];

app.use('/api/products', productRouter);

app.use((_, res) => {
  return res.status(404).send({message: 'Resource not found!'});
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000/');
});*/