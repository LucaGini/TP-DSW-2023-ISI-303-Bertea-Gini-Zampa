export class PriceHistory{
  dateSince: Date;
  price: number;
  productId: number;

  constructor(dateSince: Date, price: number, productId: number){
    this.dateSince =dateSince;
    this.price = price;
    this.productId =productId;
  }
}