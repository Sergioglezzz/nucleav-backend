import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProjectUserService } from './project-user.service';
import { CreateProjectUserDto } from './dto/create-project-user.dto';
import { UpdateProjectUserDto } from './dto/update-project-user.dto';
import { ProjectUser } from './project-user.entity';

@Controller('project-users')
export class ProjectUserController {
  constructor(private readonly projectUserService: ProjectUserService) {}

  @Post()
  create(@Body() dto: CreateProjectUserDto): Promise<ProjectUser> {
    return this.projectUserService.create(dto);
  }

  @Get()
  findAll(): Promise<ProjectUser[]> {
    return this.projectUserService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<ProjectUser> {
    return this.projectUserService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() dto: UpdateProjectUserDto,
  ): Promise<ProjectUser> {
    return this.projectUserService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.projectUserService.remove(+id);
  }
}
