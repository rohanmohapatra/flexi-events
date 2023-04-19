import { Module } from '@nestjs/common';
import { RegistrationController } from './registration.controller';
import { RegistrationRepository } from './registration.repository';
import { RegistrationService } from './registration.service';
import { CassandraModule } from 'cassandra/cassandra.module';

@Module({
  imports: [CassandraModule],
  controllers: [RegistrationController],
  providers: [RegistrationService, RegistrationRepository],
})
export class RegistrationModule {}
