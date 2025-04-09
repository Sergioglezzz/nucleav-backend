import { PartialType } from '@nestjs/mapped-types';
import { CreateEventAssignedDto } from './create-event-assigned.dto';

export class UpdateEventAssignedDto extends PartialType(CreateEventAssignedDto) {}
