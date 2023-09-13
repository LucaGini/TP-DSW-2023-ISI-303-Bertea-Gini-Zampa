import express from 'express';
import { Product } from './product.js';
const app = express();
app.use(express.json());
const products = [
    new Product(1, 'Darth Vader', 'Big Darth Vader mask printed in 3d with resin.', 10, 'Resin', 1, '20-12345678-9'),
];
function sanitizeProductInput(req, res, next) {
    req.body.sanitizeInput = {
        name: req.body.name,
        description: req.body.description,
        stock: req.body.stock,
        material: req.body.material,
        categoryId: req.body.categoryId,
        cuil: req.body.cuil,
    };
    //more checks here
    Object.keys(req.body.sanitizeInput).forEach((key) => {
        if (req.body.sanitizeInput[key] === undefined)
            delete req.body.sanitizeInput[key];
    });
    next();
}
;
app.get('/api/products', (req, res) => {
    res.json({ data: products });
});
app.get('/api/products/:productId', (req, res) => {
    const product = products.find((product) => product.productId === parseInt(req.params.productId));
    if (!product) {
        return res.status(404).send({ message: 'Product not found!' });
    }
    res.json({ data: product });
});
app.post('/api/products', sanitizeProductInput, (req, res) => {
    const input = req.body.sanitizeProductInput;
    const newProduct = new Product(input.productId, //tira error si saco el id, tengo que sacarlo del constructor o hacer otra cosa? Ask Meca
    input.name, input.description, input.stock, input.material, input.categoryId, input.cuil);
    products.push(newProduct);
    return res.status(201).json({ message: 'Product inserted.', data: newProduct });
});
app.put('/api/products/:productId', sanitizeProductInput, (req, res) => {
    const productIdx = products.findIndex((product) => product.productId === parseInt(req.params.productId));
    if (productIdx === -1) {
        return res.status(404).send({ message: 'Product not found!' });
    }
    const { name, description, stock, material, categoryId, cuil } = req.body;
    products[productIdx] = { ...products[productIdx], ...req.body.sanitizeInput };
    res.status(200).json({ message: 'Product updated successfully.', data: products[productIdx] });
});
app.patch('/api/products/:productId', sanitizeProductInput, (req, res) => {
    const productIdx = products.findIndex((product) => product.productId === parseInt(req.params.productId));
    if (productIdx === -1) {
        return res.status(404).send({ message: 'Product not found!' });
    }
    const { name, description, stock, material, categoryId, cuil } = req.body;
    products[productIdx] = { ...products[productIdx], ...req.body.sanitizeInput };
    res.status(200).json({ message: 'Product updated successfully.', data: products[productIdx] });
});
app.delete('/api/products/:productId', (req, res) => {
    const productIdx = products.findIndex((product) => product.productId === parseInt(req.params.productId));
    if (productIdx === -1) {
        return res.status(404).send({ message: 'Product not found!' });
    }
    else {
        products.splice(productIdx, 1);
        res.status(200).json({ message: 'Product deleted successfully.' });
    }
});
app.use((_, res) => {
    return res.status(404).send({ message: 'Resource not found!' });
});
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000/');
}); //ask meca why port is not running/is malfunctioning
//connection is being rejected, ask meca.
//# sourceMappingURL=app.js.map