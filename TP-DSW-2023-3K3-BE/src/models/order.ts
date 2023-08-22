export class Order{
  orderNumber: number;
  date: Date;
  status:string[] = ['pending', 'confirmed', 'cancelled'];
  dni: string;

  constructor(orderNumber: number, date: Date, status:string[], dni:string){
    this.orderNumber = orderNumber;
    this.date = date;
    this.status=status;
    this.dni=dni;
  }
}
