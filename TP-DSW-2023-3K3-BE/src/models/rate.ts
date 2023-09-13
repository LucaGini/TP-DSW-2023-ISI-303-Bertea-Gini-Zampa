import { Client } from "./client.js";
import { Product } from "../product/product.entity.js";

export class Rate{
  product: Product;
  client: Client;
  date: Date;
  rate: number;
  description: string;
  constructor(product: Product, client: Client, date: Date, rate: number, description: string){
    this.product=product;
    this.client=client;
    this.date=date;
    this.rate=rate;
    this.description=description;
  }
}