export class Order {
    constructor(orderNumber, date, status, client) {
        this.status = ['pending', 'confirmed', 'cancelled'];
        this.orderNumber = orderNumber;
        this.date = date;
        this.status = status;
        this.client = client;
    }
}
//# sourceMappingURL=order.js.map