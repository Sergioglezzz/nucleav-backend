import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EventAssigned } from './event-assigned.entity';
import { CreateEventAssignedDto } from './dto/create-event-assigned.dto';
import { UpdateEventAssignedDto } from './dto/update-event-assigned.dto';

@Injectable()
export class EventAssignedService {
  constructor(
    @InjectRepository(EventAssigned)
    private readonly eventAssignedRepository: Repository<EventAssigned>,
  ) {}

  async create(createEventAssignedDto: CreateEventAssignedDto): Promise<EventAssigned> {
    const eventAssigned = this.eventAssignedRepository.create(createEventAssignedDto);
    return this.eventAssignedRepository.save(eventAssigned);
  }

  async findAll(): Promise<EventAssigned[]> {
    return this.eventAssignedRepository.find({ relations: ['event', 'employee'] });
  }

  async findOne(id: number): Promise<EventAssigned> {
    const eventAssigned = await this.eventAssignedRepository.findOne({
      where: { id },
      relations: ['event', 'employee'],
    });
    if (!eventAssigned) {
      throw new Error(`EventAssigned with id ${id} not found`);
    }
    return eventAssigned;
  }

  async update(id: number, updateEventAssignedDto: UpdateEventAssignedDto): Promise<EventAssigned> {
    await this.eventAssignedRepository.update(id, updateEventAssignedDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.eventAssignedRepository.delete(id);
  }
}
