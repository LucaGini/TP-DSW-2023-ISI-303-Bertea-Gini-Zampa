import { Category } from "../category/category.entity.js";
import { Designer } from "../designer/designer.entity.js";

export class Product{
  productId: number;
  description: string;
  stock: number;
  material: string;
  name:string;
  category: Category;
  designer: Designer;

  constructor(productId: number, name: string, description: string, stock: number, material: string, category: Category, designer:Designer){
    this.productId=productId;
    this.name=name;
    this.description=description;
    this.stock=stock;
    this.material=material;
    this.category = category;
    this.designer = designer;
  }
}
