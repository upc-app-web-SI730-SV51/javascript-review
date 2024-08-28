import {SalesOrder} from "./sales/domain/model/sales-order.js";
import {Customer} from "./crm/domain/model/customer.js";

console.log("JavaScript review");

const customer = new Customer("Andres Torres");
const order = new SalesOrder(customer.id);

order.addItem({productId: 1, quantity: 20, unitPrice: 10});
order.addItem({productId: 2, quantity: 10, unitPrice: 20});

customer.lastOrderTotalPrice = order.calculateTotalPrice();

console.log(` The customer ${customer.name} identify bu ID ${customer.id} has a last order total price of ${customer.lastOrderTotalPrice}`);