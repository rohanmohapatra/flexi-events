import { ConfigModule } from '@nestjs/config';
import { CassandraService } from './cassandra.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [],
  providers: [CassandraService],
  exports: [CassandraService],
})
export class CassandraModule {}
