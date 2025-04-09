import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProjectMaterial } from './project-material.entity';
import { CreateProjectMaterialDto } from './dto/create-project-material.dto';
import { UpdateProjectMaterialDto } from './dto/update-project-material.dto';

@Injectable()
export class ProjectMaterialService {
  constructor(
    @InjectRepository(ProjectMaterial)
    private readonly projectMaterialRepository: Repository<ProjectMaterial>,
  ) {}

  async create(createProjectMaterialDto: CreateProjectMaterialDto): Promise<ProjectMaterial> {
    const projectMaterial = this.projectMaterialRepository.create(createProjectMaterialDto);
    return this.projectMaterialRepository.save(projectMaterial);
  }

  async findAll(): Promise<ProjectMaterial[]> {
    return this.projectMaterialRepository.find({ relations: ['project', 'material'] });
  }

  async findOne(id: number): Promise<ProjectMaterial> {
    const projectMaterial = await this.projectMaterialRepository.findOne({
      where: { id },
      relations: ['project', 'material'],
    });

    if (!projectMaterial) {
      throw new Error(`ProjectMaterial with id ${id} not found`);
    }

    return projectMaterial;
  }

  async update(id: number, updateProjectMaterialDto: UpdateProjectMaterialDto): Promise<ProjectMaterial> {
    await this.projectMaterialRepository.update(id, updateProjectMaterialDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.projectMaterialRepository.delete(id);
  }
}
