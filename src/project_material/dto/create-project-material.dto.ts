import { IsInt } from 'class-validator';

export class CreateProjectMaterialDto {
  @IsInt()
  project_id: number;

  @IsInt()
  material_id: number;

  @IsInt()
  quantity_assigned: number;
}
