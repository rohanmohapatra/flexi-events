import { Injectable, OnModuleInit } from '@nestjs/common';
import { mapping } from 'cassandra-driver';
import { CassandraService } from 'src/cassandra/cassandra.service';
import { Participant } from 'src/models/Participant';
import { UUID } from 'src/types';

@Injectable()
export class RegistrationRepository implements OnModuleInit {
  constructor(private readonly cassandraService: CassandraService) {}

  private participantMapper: mapping.ModelMapper<Participant>;

  onModuleInit() {
    const mappingOptions: mapping.MappingOptions = {
      models: {
        Participant: {
          tables: ['participants'],
          mappings: new mapping.UnderscoreCqlToCamelCaseMappings(),
        },
      },
    };
    this.participantMapper = this.cassandraService
      .createMapper(mappingOptions)
      .forModel('Participant');
  }

  async getParticipants(eventId: UUID) {
    return (await this.participantMapper.find({ eventId })).toArray();
  }

  async addParticipant(participant: Participant) {
    return await this.participantMapper.insert(participant);
  }
}
