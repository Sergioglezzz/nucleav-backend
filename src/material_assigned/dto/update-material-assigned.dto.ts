import { PartialType } from '@nestjs/mapped-types';
import { CreateMaterialAssignedDto } from './create-material-assigned.dto';

export class UpdateMaterialAssignedDto extends PartialType(CreateMaterialAssignedDto) {}
