import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {
  private customers = [
    { id: 1, name: 'Alice', email: 'alice@email.com' },
    { id: 2, name: 'Bob', email: 'bob@email.com' },
  ];

  findAll() {
    return this.customers;
  }

  create(customer: any) {
    const newCustomer = { id: Date.now(), ...customer };
    this.customers.push(newCustomer);
    return newCustomer;
  }

  update(id: number, updatedData: any) {
    const index = this.customers.findIndex(c => c.id === id);
    if (index === -1) return null;
    this.customers[index] = { ...this.customers[index], ...updatedData };
    return this.customers[index];
  }

  delete(id: number) {
    const index = this.customers.findIndex(c => c.id === id);
    if (index === -1) return null;
    const deleted = this.customers.splice(index, 1);
    return deleted[0];
  }
}