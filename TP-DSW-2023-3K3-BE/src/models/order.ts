import { Client } from './client';

export class Order{
  orderNumber: number;
  date: Date;
  status:string[] = ['pending', 'confirmed', 'cancelled'];
  client: Client; 

  constructor(orderNumber: number, date: Date, status:string[], client:Client){
    this.orderNumber = orderNumber;
    this.date = date;
    this.status=status;
    this.client=client;
  }
}
