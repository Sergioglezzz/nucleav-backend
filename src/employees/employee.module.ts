import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './employee.entity';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';

import { User } from '../users/user.entity';
import { Company } from '../companies/company.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Employee, User, Company])],
  providers: [EmployeeService],
  controllers: [EmployeeController],
})
export class EmployeesModule {}
