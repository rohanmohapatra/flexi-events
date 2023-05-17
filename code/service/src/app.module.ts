import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CassandraModule } from './cassandra/cassandra.module';
import { RegistrationModule } from './registration/registration.module';
import { ConfigModule } from '@nestjs/config';
import { EventsModule } from './events/events.module';
import { UserModule } from 'users/user.module';
import { AuthModule } from 'auth/auth.module';
import { ZoomModule } from 'zoom/zoom.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    CassandraModule,
    RegistrationModule,
    EventsModule,
    UserModule,
    AuthModule,
    ZoomModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
