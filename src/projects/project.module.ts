import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from './project.entity';
import { ProjectService } from './project.service';
import { ProjectController } from './project.controller';
import { Company } from '../companies/company.entity';
import { User } from '../users/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Project, Company, User])],
  providers: [ProjectService],
  controllers: [ProjectController],
})
export class ProjectModule {}
