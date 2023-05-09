import { Module } from '@nestjs/common';
import { CassandraModule } from 'cassandra/cassandra.module';
import { EventsController } from './events.controller';
import { EventsRepository } from './events.repository';
import { EventsService } from './events.service';
import { UserRepository } from 'users/user.repository';

@Module({
  imports: [CassandraModule],
  controllers: [EventsController],
  providers: [EventsRepository, EventsService, UserRepository],
})
export class EventsModule {}
