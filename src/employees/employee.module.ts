import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './employee.entity';
import { EmployeesService } from './employee.service';
import { EmployeesController } from './employee.controller';
import { User } from '../users/user.entity';
import { Company } from '../companies/company.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Employee, User, Company])],
  providers: [EmployeesService],
  controllers: [EmployeesController],
})
export class EmployeesModule {}
