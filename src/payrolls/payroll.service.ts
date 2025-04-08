import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Payroll } from './payroll.entity';
import { CreatePayrollDto } from './dto/create-payroll.dto';
import { UpdatePayrollDto } from './dto/update-payroll.dto';

@Injectable()
export class PayrollService {
  constructor(
    @InjectRepository(Payroll)
    private readonly payrollRepository: Repository<Payroll>,
  ) {}

  async create(createPayrollDto: CreatePayrollDto): Promise<Payroll> {
    const payroll = this.payrollRepository.create(createPayrollDto);
    return this.payrollRepository.save(payroll);
  }

  async findAll(): Promise<Payroll[]> {
    return this.payrollRepository.find({ relations: ['employee', 'company'] });
  }

  async findOne(id: number): Promise<Payroll> {
    const payroll = await this.payrollRepository.findOne({
      where: { id },
      relations: ['employee', 'company'],
    });
    if (!payroll) {
      throw new Error(`Payroll with ID ${id} not found`);
    }
    return payroll;
  }

  async update(id: number, updatePayrollDto: UpdatePayrollDto): Promise<Payroll> {
    await this.payrollRepository.update(id, updatePayrollDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.payrollRepository.delete(id);
  }
}
