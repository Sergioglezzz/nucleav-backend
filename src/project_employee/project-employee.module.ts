import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectEmployee } from './project-employee.entity';
import { ProjectEmployeeService } from './project-employee.service';
import { ProjectEmployeeController } from './project-employee.controller';
import { Project } from '../projects/project.entity';
import { Employee } from '../employees/employee.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProjectEmployee, Project, Employee])],
  providers: [ProjectEmployeeService],
  controllers: [ProjectEmployeeController],
})
export class ProjectEmployeeModule {}
