import express from 'express';
import { Product } from './product';
const app = express();
const products = [
    new Product(1, 'Darth Vader', 'Big Darth Vader mask printed in 3d with resin.', 10, 'Resin', 1, '20-12345678-9'),
];
app.get('/api/product', (req, res) => {
    res.json(products);
});
app.use('/', (req, res) => {
    res.json({ message: '<h1>Hello World!</h1>' });
});
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000/');
});
//# sourceMappingURL=app.js.map