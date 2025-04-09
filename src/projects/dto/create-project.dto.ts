import { IsString, IsOptional, IsEnum, IsInt, IsDateString, IsBoolean } from 'class-validator';
import { ProjectType } from '../project.entity';

export class CreateProjectDto {
  @IsString()
  company_cif: string;

  @IsInt()
  created_by: number;

  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsEnum(ProjectType)
  type?: ProjectType;

  @IsOptional()
  @IsDateString()
  start_date?: Date;

  @IsOptional()
  @IsDateString()
  end_date?: Date;

  @IsOptional()
  @IsString()
  status?: string;

  @IsOptional()
  @IsBoolean()
  is_collaborative?: boolean;
}
