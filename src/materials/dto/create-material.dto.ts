import { IsString, IsOptional, IsInt, IsBoolean } from 'class-validator';

export class CreateMaterialDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  category?: string;

  @IsOptional()
  @IsInt()
  quantity?: number;

  @IsOptional()
  @IsInt()
  available_quantity?: number;

  @IsOptional()
  @IsString()
  status?: string;

  @IsOptional()
  @IsBoolean()
  is_consumable?: boolean;

  @IsOptional()
  @IsString()
  company_cif?: string;

  @IsOptional()
  @IsInt()
  user_id?: number;
}
