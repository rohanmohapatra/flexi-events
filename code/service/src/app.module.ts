import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CassandraModule } from './cassandra/cassandra.module';
import { RegistrationModule } from './registration/registration.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), CassandraModule, RegistrationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}