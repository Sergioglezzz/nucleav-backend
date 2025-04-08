import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Payroll } from './payroll.entity';
import { PayrollService } from './payroll.service';
import { PayrollController } from './payroll.controller';
import { Employee } from '../employees/employee.entity';
import { Company } from '../companies/company.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Payroll, Employee, Company])],
  providers: [PayrollService],
  controllers: [PayrollController],
})
export class PayrollModule {}
