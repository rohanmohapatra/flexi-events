import { Module } from '@nestjs/common';
import { CassandraModule } from 'cassandra/cassandra.module';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserRepository } from './user.repository';

@Module({
  imports: [CassandraModule],
  controllers: [UserController],
  providers: [UserService, UserRepository],
})
export class UserModule {}
