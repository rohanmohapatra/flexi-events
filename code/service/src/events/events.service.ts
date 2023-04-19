import { Injectable } from '@nestjs/common';
import { UUID } from 'types';
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

  async addKeywords(eventId: UUID, keywords: string[]) {
    return await this.eventsRepository.addKeywords(eventId, keywords);
  }
}
