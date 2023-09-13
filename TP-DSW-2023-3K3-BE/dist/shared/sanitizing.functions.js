export function sanitizeProductInput(req, res, next) {
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
;
//# sourceMappingURL=sanitizing.functions.js.map