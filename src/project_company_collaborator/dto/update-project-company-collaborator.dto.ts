import { PartialType } from '@nestjs/mapped-types';
import { CreateProjectCompanyCollaboratorDto } from './create-project-company-collaborator.dto';

export class UpdateProjectCompanyCollaboratorDto extends PartialType(CreateProjectCompanyCollaboratorDto) {}
