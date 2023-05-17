import { Injectable } from '@nestjs/common';
import { UUID } from 'types';
import { EventsRepository } from './events.repository';
import { UserRepository } from 'users/user.repository';
import { promises } from 'dns';
import axios from 'axios';
import * as extractor from 'keyword-extractor';

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
    if (event.eventDescription) {
      const keywords = (extractor as any).extract(event.eventDescription, {
        language: 'english',
        remove_digits: true,
        return_changed_case: true,
        remove_duplicates: true,
      });
      event = { ...event, keywords: keywords.slice(0, 5) };
    }
    return await this.eventsRepository.addEvent(event);
  }

  async addKeywords(eventId: UUID, email: string, keywords: string[]) {
    return await this.eventsRepository.addKeywords(eventId, email, keywords);
  }

  async deleteKeyword(eventId: UUID, email: string, keyword: string) {
    return await this.eventsRepository.deleteKeyword(eventId, email, keyword);
  }

  async deleteEvent(eventId: UUID, email: string) {
    return await this.eventsRepository.deleteEvent(eventId, email);
  }

  async createMeeting(eventId: UUID, email: string, zoomAuth: string) {
    const event = await this.getEvent(eventId, email);

    const uri = `https://api.zoom.us/v2/users/me/meetings`;

    const payload = {
      topic: event.eventTitle,
      agenda: event.eventDescription,
      type: 2,
      start_time: event.startDate,
      duration: 40,
    };

    const response = await axios.post(uri, payload, {
      headers: { Authorization: zoomAuth },
    });
    await this.eventsRepository.addEventLink(
      eventId,
      email,
      response.data.join_url,
    );
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

  async searchEvents(searchString: string) {
    let events = await this.getAllEvents();
    events = events.filter((event) => {
      return (
        event.eventTitle.toLowerCase().includes(searchString) ||
        (event.keywords ?? [])
          .map((keyword) => keyword.toLowerCase())
          .includes(searchString)
      );
    });
    return events;
  }
}
