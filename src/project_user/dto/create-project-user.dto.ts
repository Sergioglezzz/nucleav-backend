import { IsInt } from 'class-validator';

export class CreateProjectUserDto {
  @IsInt()
  project_id: number;

  @IsInt()
  user_id: number;
}
