export class Order {
    constructor(orderNumber, date, status, dni) {
        this.status = ['pending', 'confirmed', 'cancelled'];
        this.orderNumber = orderNumber;
        this.date = date;
        this.status = status;
        this.dni = dni;
    }
}
//# sourceMappingURL=order.js.map