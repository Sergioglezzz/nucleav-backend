import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProjectEmployee } from './project-employee.entity';
import { CreateProjectEmployeeDto } from './dto/create-project-employee.dto';
import { UpdateProjectEmployeeDto } from './dto/update-project-employee.dto';

@Injectable()
export class ProjectEmployeeService {
  constructor(
    @InjectRepository(ProjectEmployee)
    private readonly projectEmployeeRepository: Repository<ProjectEmployee>,
  ) {}

  async create(createProjectEmployeeDto: CreateProjectEmployeeDto): Promise<ProjectEmployee> {
    const projectEmployee = this.projectEmployeeRepository.create(createProjectEmployeeDto);
    return this.projectEmployeeRepository.save(projectEmployee);
  }

  async findAll(): Promise<ProjectEmployee[]> {
    return this.projectEmployeeRepository.find({ relations: ['project', 'employee'] });
  }

  async findOne(id: number): Promise<ProjectEmployee> {
    const projectEmployee = await this.projectEmployeeRepository.findOne({
      where: { id },
      relations: ['project', 'employee'],
    });
    if (!projectEmployee) {
      throw new Error(`ProjectEmployee with id ${id} not found`);
    }
    return projectEmployee;
  }

  async update(id: number, updateProjectEmployeeDto: UpdateProjectEmployeeDto): Promise<ProjectEmployee> {
    await this.projectEmployeeRepository.update(id, updateProjectEmployeeDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.projectEmployeeRepository.delete(id);
  }
}
