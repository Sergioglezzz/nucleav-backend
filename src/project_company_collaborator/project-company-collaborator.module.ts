import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectCompanyCollaborator } from './project-company-collaborator.entity';
import { ProjectCompanyCollaboratorService } from './project-company-collaborator.service';
import { ProjectCompanyCollaboratorController } from './project-company-collaborator.controller';
import { Project } from '../projects/project.entity';
import { Company } from '../companies/company.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProjectCompanyCollaborator, Project, Company])],
  providers: [ProjectCompanyCollaboratorService],
  controllers: [ProjectCompanyCollaboratorController],
})
export class ProjectCompanyCollaboratorModule {}
