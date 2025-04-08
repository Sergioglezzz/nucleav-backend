import { IsDateString, IsInt, IsString, IsOptional, IsNumber } from 'class-validator';

export class CreatePayrollDto {
  @IsInt()
  employee_id: number;

  @IsString()
  company_cif: string;

  @IsDateString()
  payroll_date: Date;

  @IsString()
  file_url: string;

  @IsOptional()
  @IsNumber()
  gross_amount?: number;

  @IsOptional()
  @IsNumber()
  net_amount?: number;

  @IsOptional()
  @IsString()
  description?: string;
}
