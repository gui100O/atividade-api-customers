import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('employee')
@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Get()
  findAll() {
    return this.employeeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.employeeService.findOne(Number(id));
  }

  @Post()
  create(@Body() body: any) {
    return this.employeeService.create(body);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return this.employeeService.update(Number(id), body);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.employeeService.delete(Number(id));
  }
}
