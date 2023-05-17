import { Injectable } from '@nestjs/common';
import { UUID } from 'types';
import { EventsRepository } from './events.repository';

@Injectable()
export class EventsService {
  constructor(private readonly eventsRepository: EventsRepository) {}

  async getEvents(email: string) {
    return await this.eventsRepository.getEvents(email);
  }

  async getEvent(eventId: UUID, email: string) {
    return await this.eventsRepository.getEvent(eventId, email);
  }

  async addEvent(event: any) {
    return await this.eventsRepository.addEvent(event);
  }

  async addKeywords(eventId: UUID, email: string, keywords: string[]) {
    return await this.eventsRepository.addKeywords(eventId, email, keywords);
  }

  async getAllEvents() {
    return await this.eventsRepository.getAllEvents();
  }
}
