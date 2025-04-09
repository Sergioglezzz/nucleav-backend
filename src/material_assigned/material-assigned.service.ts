import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MaterialAssigned } from './material-assigned.entity';
import { CreateMaterialAssignedDto } from './dto/create-material-assigned.dto';
import { UpdateMaterialAssignedDto } from './dto/update-material-assigned.dto';

@Injectable()
export class MaterialAssignedService {
  constructor(
    @InjectRepository(MaterialAssigned)
    private readonly materialAssignedRepository: Repository<MaterialAssigned>,
  ) {}

  async create(createMaterialAssignedDto: CreateMaterialAssignedDto): Promise<MaterialAssigned> {
    const materialAssigned = this.materialAssignedRepository.create(createMaterialAssignedDto);
    return this.materialAssignedRepository.save(materialAssigned);
  }

  async findAll(): Promise<MaterialAssigned[]> {
    return this.materialAssignedRepository.find({ relations: ['event', 'material'] });
  }

  async findOne(id: number): Promise<MaterialAssigned> {
    const materialAssigned = await this.materialAssignedRepository.findOne({
      where: { id },
      relations: ['event', 'material'],
    });
    if (!materialAssigned) {
      throw new Error(`MaterialAssigned with id ${id} not found`);
    }
    return materialAssigned;
  }

  async update(id: number, updateMaterialAssignedDto: UpdateMaterialAssignedDto): Promise<MaterialAssigned> {
    await this.materialAssignedRepository.update(id, updateMaterialAssignedDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.materialAssignedRepository.delete(id);
  }
}
