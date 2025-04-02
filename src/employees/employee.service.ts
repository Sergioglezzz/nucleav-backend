import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from './employee.entity';

@Injectable()
export class EmployeesService {
  constructor(
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>,
  ) {}

  findAll() {
    return this.employeeRepository.find({ relations: ['user', 'company'] });
  }

  findOne(id: number) {
    return this.employeeRepository.findOne({
      where: { id },
      relations: ['user', 'company'],
    });
  }

  create(data: Partial<Employee>) {
    const employee = this.employeeRepository.create(data);
    return this.employeeRepository.save(employee);
  }

  async remove(id: number): Promise<void> {
    await this.employeeRepository.delete(id);
  }
}
