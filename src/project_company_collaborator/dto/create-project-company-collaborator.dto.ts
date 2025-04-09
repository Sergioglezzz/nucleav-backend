import { IsInt, IsString } from 'class-validator';

export class CreateProjectCompanyCollaboratorDto {
  @IsInt()
  project_id: number;

  @IsString()
  company_cif: string;
}
