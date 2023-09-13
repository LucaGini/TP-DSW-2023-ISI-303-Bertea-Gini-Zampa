import { Product } from "../product/product.entity.js";

export class PriceHistory{
  dateSince: Date;
  price: number;
  product: Product;

  constructor(dateSince: Date, price: number, product: Product){
    this.dateSince =dateSince;
    this.price = price;
    this.product =product;
  }
}