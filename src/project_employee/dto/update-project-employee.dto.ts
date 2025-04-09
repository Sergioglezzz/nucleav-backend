import { PartialType } from '@nestjs/mapped-types';
import { CreateProjectEmployeeDto } from './create-project-employee.dto';

export class UpdateProjectEmployeeDto extends PartialType(CreateProjectEmployeeDto) {}
