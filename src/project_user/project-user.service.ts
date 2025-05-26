import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProjectUser } from './project-user.entity';
import { CreateProjectUserDto } from './dto/create-project-user.dto';
import { UpdateProjectUserDto } from './dto/update-project-user.dto';

@Injectable()
export class ProjectUserService {
  constructor(
    @InjectRepository(ProjectUser)
    private readonly projectUserRepository: Repository<ProjectUser>,
  ) {}

  create(dto: CreateProjectUserDto): Promise<ProjectUser> {
    const record = this.projectUserRepository.create(dto);
    return this.projectUserRepository.save(record);
  }

  findAll(): Promise<ProjectUser[]> {
    return this.projectUserRepository.find();
  }

  async findOne(id: number): Promise<ProjectUser> {
    const user = await this.projectUserRepository.findOneBy({ id });
    if (!user) {
      throw new Error(`ProjectUser with id ${id} not found`);
    }
    return user;
  }

  async update(id: number, dto: UpdateProjectUserDto): Promise<ProjectUser> {
    await this.projectUserRepository.update(id, dto);
    return this.findOne(id);
  }

  remove(id: number): Promise<void> {
    return this.projectUserRepository.delete(id).then(() => undefined);
  }
}
