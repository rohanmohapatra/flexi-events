import { Injectable, OnModuleInit } from '@nestjs/common';
import { mapping } from 'cassandra-driver';
import { CassandraService } from 'cassandra/cassandra.service';
import { Event } from 'models/Event';
import { UUID } from 'types';

@Injectable()
export class EventsRepository implements OnModuleInit {
  constructor(private readonly cassandraService: CassandraService) {}

  private eventMapper: mapping.ModelMapper<Event>;

  onModuleInit() {
    const mappingOptions: mapping.MappingOptions = {
      models: {
        Event: {
          tables: ['events'],
          mappings: new mapping.UnderscoreCqlToCamelCaseMappings(),
        },
      },
    };
    this.eventMapper = this.cassandraService
      .createMapper(mappingOptions)
      .forModel('Event');
  }

  async getEvents(email: string) {
    return await (await this.eventMapper.find({ email: email })).toArray();
  }
  async getEvent(eventId: UUID, email: string) {
    return await (await this.eventMapper.find({ eventId, email })).first();
  }

  async addEvent(event: Event) {
    return await this.eventMapper.insert(event);
  }

  async addKeywords(eventId: UUID, email: string, keywords: string[]) {
    const event = await this.getEvent(eventId, email);
    await this.eventMapper.update({
      eventId: eventId,
      keywords: event.keywords.concat(keywords),
    });
  }

  async getAllEvents() {
    return await (await this.eventMapper.findAll()).toArray();
  }
}
