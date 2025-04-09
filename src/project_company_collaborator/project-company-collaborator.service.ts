import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProjectCompanyCollaborator } from './project-company-collaborator.entity';
import { CreateProjectCompanyCollaboratorDto } from './dto/create-project-company-collaborator.dto';
import { UpdateProjectCompanyCollaboratorDto } from './dto/update-project-company-collaborator.dto';

@Injectable()
export class ProjectCompanyCollaboratorService {
  constructor(
    @InjectRepository(ProjectCompanyCollaborator)
    private readonly projectCompanyCollaboratorRepository: Repository<ProjectCompanyCollaborator>,
  ) {}

  async create(createDto: CreateProjectCompanyCollaboratorDto): Promise<ProjectCompanyCollaborator> {
    const collaborator = this.projectCompanyCollaboratorRepository.create(createDto);
    return this.projectCompanyCollaboratorRepository.save(collaborator);
  }

  async findAll(): Promise<ProjectCompanyCollaborator[]> {
    return this.projectCompanyCollaboratorRepository.find({ relations: ['project', 'company'] });
  }

  async findOne(id: number): Promise<ProjectCompanyCollaborator> {
    const collaborator = await this.projectCompanyCollaboratorRepository.findOne({
      where: { id },
      relations: ['project', 'company'],
    });
    if (!collaborator) {
      throw new Error(`ProjectCompanyCollaborator with id ${id} not found`);
    }
    return collaborator;
  }

  async update(id: number, updateDto: UpdateProjectCompanyCollaboratorDto): Promise<ProjectCompanyCollaborator> {
    await this.projectCompanyCollaboratorRepository.update(id, updateDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.projectCompanyCollaboratorRepository.delete(id);
  }
}
