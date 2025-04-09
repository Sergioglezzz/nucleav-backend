import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProjectCompanyCollaboratorService } from './project-company-collaborator.service';
import { CreateProjectCompanyCollaboratorDto } from './dto/create-project-company-collaborator.dto';
import { UpdateProjectCompanyCollaboratorDto } from './dto/update-project-company-collaborator.dto';
import { ProjectCompanyCollaborator } from './project-company-collaborator.entity';

@Controller('project-company-collaborators')
export class ProjectCompanyCollaboratorController {
  constructor(private readonly service: ProjectCompanyCollaboratorService) {}

  @Post()
  create(@Body() createDto: CreateProjectCompanyCollaboratorDto): Promise<ProjectCompanyCollaborator> {
    return this.service.create(createDto);
  }

  @Get()
  findAll(): Promise<ProjectCompanyCollaborator[]> {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<ProjectCompanyCollaborator> {
    return this.service.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDto: UpdateProjectCompanyCollaboratorDto,
  ): Promise<ProjectCompanyCollaborator> {
    return this.service.update(+id, updateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.service.remove(+id);
  }
}
