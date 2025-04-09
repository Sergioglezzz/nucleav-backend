import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EventAssignedService } from './event-assigned.service';
import { CreateEventAssignedDto } from './dto/create-event-assigned.dto';
import { UpdateEventAssignedDto } from './dto/update-event-assigned.dto';
import { EventAssigned } from './event-assigned.entity';

@Controller('event-assigneds')
export class EventAssignedController {
  constructor(private readonly eventAssignedService: EventAssignedService) {}

  @Post()
  create(@Body() createEventAssignedDto: CreateEventAssignedDto): Promise<EventAssigned> {
    return this.eventAssignedService.create(createEventAssignedDto);
  }

  @Get()
  findAll(): Promise<EventAssigned[]> {
    return this.eventAssignedService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<EventAssigned> {
    return this.eventAssignedService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEventAssignedDto: UpdateEventAssignedDto,
  ): Promise<EventAssigned> {
    return this.eventAssignedService.update(+id, updateEventAssignedDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.eventAssignedService.remove(+id);
  }
}
