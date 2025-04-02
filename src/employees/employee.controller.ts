import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { EmployeesService } from './employee.service';
import { Employee } from './employee.entity';

@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Get()
  findAll() {
    return this.employeesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.employeesService.findOne(+id);
  }

  @Post()
  create(@Body() data: Partial<Employee>) {
    return this.employeesService.create(data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.employeesService.remove(+id);
  }
}
