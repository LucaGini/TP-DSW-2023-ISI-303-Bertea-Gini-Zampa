import { Repository } from "../shared/repository.js";
import { Product } from "./product.entity.js";
import { sanitizeProductInput } from "../shared/sanitizing.functions.js";

export class ProductRepository implements Repository<Product>{
  private products: Product[] = [
    new Product(1, 'Darth Vader', 'Big Darth Vader mask printed in 3d with resin.', 10, 'Resin', 1, '20-12345678-9'),
  ];

  find(item?: { id: number; }): Product[] | Product | undefined {
    if (!item) {
      return this.products;
    }
    return this.products.find((product) => product.productId === item.id);
  }

  add(item: Product): undefined {
    this.products.push(item);
  }

  update(item: Product): Product | undefined {
    const productIdx = this.products.findIndex((product) => product.productId === item.productId);
    if (productIdx !== -1) {
      this.products[productIdx] = item
      return this.products[productIdx]
    }
    //TODO throw error if not found
  }

  delete(item: { id: number; }): undefined {
    const productIdx = this.products.findIndex((product) => product.productId === item.id);
    if (productIdx !== -1) {
      this.products.splice(productIdx, 1);
    }
    //TODO throw error if not found
  }
}
