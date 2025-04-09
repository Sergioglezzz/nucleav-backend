import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProjectEmployeeService } from './project-employee.service';
import { CreateProjectEmployeeDto } from './dto/create-project-employee.dto';
import { UpdateProjectEmployeeDto } from './dto/update-project-employee.dto';
import { ProjectEmployee } from './project-employee.entity';

@Controller('project-employees')
export class ProjectEmployeeController {
  constructor(private readonly projectEmployeeService: ProjectEmployeeService) {}

  @Post()
  create(@Body() createProjectEmployeeDto: CreateProjectEmployeeDto): Promise<ProjectEmployee> {
    return this.projectEmployeeService.create(createProjectEmployeeDto);
  }

  @Get()
  findAll(): Promise<ProjectEmployee[]> {
    return this.projectEmployeeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<ProjectEmployee> {
    return this.projectEmployeeService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProjectEmployeeDto: UpdateProjectEmployeeDto,
  ): Promise<ProjectEmployee> {
    return this.projectEmployeeService.update(+id, updateProjectEmployeeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.projectEmployeeService.remove(+id);
  }
}
