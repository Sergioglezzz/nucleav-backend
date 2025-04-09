import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProjectMaterialService } from './project-material.service';
import { CreateProjectMaterialDto } from './dto/create-project-material.dto';
import { UpdateProjectMaterialDto } from './dto/update-project-material.dto';
import { ProjectMaterial } from './project-material.entity';

@Controller('project-materials')
export class ProjectMaterialController {
  constructor(private readonly projectMaterialService: ProjectMaterialService) {}

  @Post()
  create(@Body() createProjectMaterialDto: CreateProjectMaterialDto): Promise<ProjectMaterial> {
    return this.projectMaterialService.create(createProjectMaterialDto);
  }

  @Get()
  findAll(): Promise<ProjectMaterial[]> {
    return this.projectMaterialService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<ProjectMaterial> {
    return this.projectMaterialService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProjectMaterialDto: UpdateProjectMaterialDto,
  ): Promise<ProjectMaterial> {
    return this.projectMaterialService.update(+id, updateProjectMaterialDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.projectMaterialService.remove(+id);
  }
}
