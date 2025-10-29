import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';

@Injectable()
export class EmployeeService {
  private employees = [
    { id: 1, name: 'Carlos', role: 'Manager' },
    { id: 2, name: 'Fernanda', role: 'Developer' },
  ];

  findAll() {
    return this.employees;
  }

  findOne(id: number) {
    const employee = this.employees.find(e => e.id === id);
    if (!employee) throw new NotFoundException(`Funcionário com id ${id} não encontrado.`);
    return employee;
  }

  create(employee: any) {
    if (!employee.name || !employee.role) {
      throw new BadRequestException('Nome e cargo são obrigatórios.');
    }
    const newEmployee = { id: Date.now(), ...employee };
    this.employees.push(newEmployee);
    return newEmployee;
  }

  update(id: number, updatedData: any) {
    const index = this.employees.findIndex(e => e.id === id);
    if (index === -1) throw new NotFoundException(`Funcionário com id ${id} não encontrado.`);

    this.employees[index] = { ...this.employees[index], ...updatedData };
    return this.employees[index];
  }

  delete(id: number) {
    const index = this.employees.findIndex(e => e.id === id);
    if (index === -1) throw new NotFoundException(`Funcionário com id ${id} não encontrado.`);

    const deleted = this.employees.splice(index, 1);
    return deleted[0];
  }
}
