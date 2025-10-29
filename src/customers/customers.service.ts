import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';

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
    if (!customer.name || !customer.email) {
      throw new BadRequestException('Nome e email são obrigatórios.');
    }
    const newCustomer = { id: Date.now(), ...customer };
    this.customers.push(newCustomer);
    return newCustomer;
  }

  findOne(id: number) {
    const customer = this.customers.find(c => c.id === id);
    if (!customer) throw new NotFoundException(`Cliente com id ${id} não encontrado.`);
    return customer;
  }

  update(id: number, updatedData: any) {
    const index = this.customers.findIndex(c => c.id === id);
    if (index === -1) throw new NotFoundException(`Cliente com id ${id} não encontrado.`);

    this.customers[index] = { ...this.customers[index], ...updatedData };
    return this.customers[index];
  }

  delete(id: number) {
    const index = this.customers.findIndex(c => c.id === id);
    if (index === -1) throw new NotFoundException(`Cliente com id ${id} não encontrado.`);

    const deleted = this.customers.splice(index, 1);
    return deleted[0];
  }
}
