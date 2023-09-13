import { Product } from "./product.entity.js";
export class ProductRepository {
    constructor() {
        this.products = [
            new Product(1, 'Darth Vader', 'Big Darth Vader mask printed in 3d with resin.', 10, 'Resin', 1, '20-12345678-9'),
        ];
    }
    find(item) {
        if (!item) {
            return this.products;
        }
        return this.products.find((product) => product.productId === item.id);
    }
    add(item) {
        this.products.push(item);
    }
    update(item) {
        const productIdx = this.products.findIndex((product) => product.productId === item.productId);
        if (productIdx !== -1) {
            this.products[productIdx] = item;
            return this.products[productIdx];
        }
        //TODO throw error if not found
    }
    delete(item) {
        const productIdx = this.products.findIndex((product) => product.productId === item.id);
        if (productIdx !== -1) {
            this.products.splice(productIdx, 1);
        }
        //TODO throw error if not found
    }
}
//# sourceMappingURL=product.repository.js.map