import { ProductRepository } from "./product.repository.js";
export class ProductController {
    constructor(repo = new ProductRepository) {
        this.repo = repo;
    }
    sanitizeProductInput(req, res, next) {
        req.body.sanitizeInput = {
            name: req.body.name,
            description: req.body.description,
            stock: req.body.stock,
            material: req.body.material,
            categoryId: req.body.categoryId,
            client: req.body.client,
        };
        //more checks here
        Object.keys(req.body.sanitizeInput).forEach((key) => {
            if (req.body.sanitizeInput[key] === undefined)
                delete req.body.sanitizeInput[key];
        });
        next();
    }
}
(req, res) => {
    return res.json({ this: .repo.findAll() });
};
;
//# sourceMappingURL=product.controller.js.map