import { IsString, IsOptional, IsDateString, IsBoolean, IsInt } from 'class-validator';

export class CreateEventDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsDateString()
  event_date: Date;

  @IsOptional()
  @IsDateString()
  end_date?: Date;

  @IsOptional()
  @IsString()
  location?: string;

  @IsOptional()
  @IsBoolean()
  is_public?: boolean;

  @IsString()
  company_cif: string;

  @IsOptional()
  @IsInt()
  project_id?: number;

  @IsOptional()
  @IsInt()
  created_by?: number;

  @IsOptional()
  @IsString()
  status?: string;
}
