import { Injectable } from '@nestjs/common';
import { UUID } from 'types';
import { EventsRepository } from './events.repository';
import { UserRepository } from 'users/user.repository';
import { promises } from 'dns';

@Injectable()
export class EventsService {
  constructor(
    private readonly eventsRepository: EventsRepository,
    private readonly usersRepository: UserRepository,
  ) {}

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
    const events = await this.eventsRepository.getAllEvents();
    const promises = events.map(async (event) => {
      return {
        ...event,
        creatorName: (await this.usersRepository.getUserProfile(event.email))
          .name,
      };
    });
    return await Promise.all(promises);
  }
}
