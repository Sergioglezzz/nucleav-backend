import { IsInt } from 'class-validator';

export class CreateProjectEmployeeDto {
  @IsInt()
  project_id: number;

  @IsInt()
  employee_id: number;
}
