import { Module } from '@nestjs/common';
import { CassandraModule } from 'cassandra/cassandra.module';
import { EventsController } from './events.controller';
import { EventsRepository } from './events.repository';
import { EventsService } from './events.service';

@Module({
  imports: [CassandraModule],
  controllers: [EventsController],
  providers: [EventsRepository, EventsService],
})
export class EventsModule {}
