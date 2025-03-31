import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { Employee } from './employees.entity';

@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Get()
  async getAllEmployees(): Promise<Employee[]> {
    return this.employeesService.findAll();
  }

  @Get(':id')
  async getEmployeeById(@Param('id') id: number): Promise<Employee> {
    return this.employeesService.findOne(id);
  }

  @Post()
  async createEmployee(@Body() employeeData: Partial<Employee>): Promise<Employee> {
    return this.employeesService.create(employeeData);
  }

  @Put(':id')
  async updateEmployee(
    @Param('id') id: number,
    @Body() employeeData: Partial<Employee>,
  ): Promise<Employee> {
    return this.employeesService.update(id, employeeData);
  }

  @Delete(':id')
  async deleteEmployee(@Param('id') id: number): Promise<void> {
    return this.employeesService.remove(id);
  }
}