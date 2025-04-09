import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MaterialAssigned } from './material-assigned.entity';
import { MaterialAssignedService } from './material-assigned.service';
import { MaterialAssignedController } from './material-assigned.controller';
import { Event } from '../events/event.entity';
import { Material } from '../materials/material.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MaterialAssigned, Event, Material])],
  providers: [MaterialAssignedService],
  controllers: [MaterialAssignedController],
})
export class MaterialAssignedModule {}
