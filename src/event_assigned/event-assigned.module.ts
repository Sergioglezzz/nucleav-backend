import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventAssigned } from './event-assigned.entity';
import { EventAssignedService } from './event-assigned.service';
import { EventAssignedController } from './event-assigned.controller';
import { Event } from '../events/event.entity';
import { Employee } from '../employees/employee.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EventAssigned, Event, Employee])],
  providers: [EventAssignedService],
  controllers: [EventAssignedController],
})
export class EventAssignedModule {}
