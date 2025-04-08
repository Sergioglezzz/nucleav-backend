import { IsDateString, IsInt, IsOptional, IsString, IsBoolean } from 'class-validator';

export class CreateEmployeeDto {
  @IsInt()
  user_id: number;

  @IsString()
  company_cif: string;

  @IsString()
  company_role: string;

  @IsDateString()
  start_date: Date;

  @IsOptional()
  @IsDateString()
  end_date?: Date;

  @IsOptional()
  @IsBoolean()
  is_active?: boolean;
}
