import { IsInt } from 'class-validator';

export class CreateEventAssignedDto {
  @IsInt()
  event_id: number;

  @IsInt()
  employee_id: number;
}
