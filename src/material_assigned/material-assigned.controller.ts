import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MaterialAssignedService } from './material-assigned.service';
import { CreateMaterialAssignedDto } from './dto/create-material-assigned.dto';
import { UpdateMaterialAssignedDto } from './dto/update-material-assigned.dto';
import { MaterialAssigned } from './material-assigned.entity';

@Controller('material-assigneds')
export class MaterialAssignedController {
  constructor(private readonly materialAssignedService: MaterialAssignedService) {}

  @Post()
  create(@Body() createMaterialAssignedDto: CreateMaterialAssignedDto): Promise<MaterialAssigned> {
    return this.materialAssignedService.create(createMaterialAssignedDto);
  }

  @Get()
  findAll(): Promise<MaterialAssigned[]> {
    return this.materialAssignedService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<MaterialAssigned> {
    return this.materialAssignedService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMaterialAssignedDto: UpdateMaterialAssignedDto,
  ): Promise<MaterialAssigned> {
    return this.materialAssignedService.update(+id, updateMaterialAssignedDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.materialAssignedService.remove(+id);
  }
}
