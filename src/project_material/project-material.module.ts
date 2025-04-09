import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectMaterial } from './project-material.entity';
import { ProjectMaterialService } from './project-material.service';
import { ProjectMaterialController } from './project-material.controller';
import { Project } from '../projects/project.entity';
import { Material } from '../materials/material.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProjectMaterial, Project, Material])],
  providers: [ProjectMaterialService],
  controllers: [ProjectMaterialController],
})
export class ProjectMaterialModule {}
