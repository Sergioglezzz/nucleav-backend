import { IsString, IsEmail, IsOptional, IsBoolean, IsInt } from 'class-validator';

export class CreateCompanyDto {
  @IsString()
  cif: string;

  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  address?: string;

  @IsString()
  phone: string;

  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  website?: string;

  @IsOptional()
  @IsString()
  logo_url?: string;

  @IsInt()
  created_by: number;

  @IsOptional()
  @IsBoolean()
  is_active?: boolean;
}
