import { Module } from '@nestjs/common';
import { CassandraModule } from 'cassandra/cassandra.module';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserRepository } from './user.repository';
import { JwtModule } from '@nestjs/jwt';
import { JWT_TOKEN_SECRET } from 'auth/authConstants';

console.log('*******', process.env.JWT_TOKEN_SECRET);

@Module({
  imports: [
    CassandraModule,
    JwtModule.register({
      global: true,
      secret: JWT_TOKEN_SECRET,
      signOptions: { expiresIn: '24000s' },
    }),
  ],
  controllers: [UserController],
  providers: [UserService, UserRepository],
})
export class UserModule {}
