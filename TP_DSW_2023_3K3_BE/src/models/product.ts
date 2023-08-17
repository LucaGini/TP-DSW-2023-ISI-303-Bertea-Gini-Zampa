export class Product{
  productId: number;
  description: string;
  stock: number;
  material: string;
  name:string;
  categoryId: number;
  cuil: string;

  constructor(productId: number, name: string, description: string, stock: number, material: string, categoryId: number, cuil:string){
    this.productId=productId;
    this.name=name;
    this.description=description;
    this.stock=stock;
    this.material=material;
    this.categoryId = categoryId;
    this.cuil = cuil;
  }
}
