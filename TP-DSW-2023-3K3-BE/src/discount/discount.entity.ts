export class Discount{
  dateSince: Date;
  amount: number;
  discount: number;

  constructor(dateSince: Date, amount: number, discount: number){
    this.dateSince=dateSince;
    this.amount=amount;
    this.discount=discount;
  }
}