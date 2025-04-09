import { IsInt } from 'class-validator';

export class CreateMaterialAssignedDto {
  @IsInt()
  event_id: number;

  @IsInt()
  material_id: number;

  @IsInt()
  quantity_assigned: number;
}
