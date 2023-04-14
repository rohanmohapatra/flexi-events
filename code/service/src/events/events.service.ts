import { Injectable } from '@nestjs/common';
import { UUID } from 'src/types';
import { EventsRepository } from './events.repository';

@Injectable()
export class EventsService {
  constructor(private readonly eventsRepository: EventsRepository) {}

  async getEvent(eventId: UUID) {
    return await this.eventsRepository.getEvent(eventId);
  }

  async addEvent(event: any) {
    return await this.eventsRepository.addEvent(event);
  }
}
