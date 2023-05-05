import { Module } from '@nestjs/common';
import { CassandraModule } from 'cassandra/cassandra.module';
import { JwtModule } from '@nestjs/jwt';
import { JWT_TOKEN_SECRET } from 'auth/auth.constants';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AuthRepository } from './auth.repository';

@Module({
  imports: [
    CassandraModule,
    JwtModule.register({
      global: true,
      secret: JWT_TOKEN_SECRET,
      signOptions: { expiresIn: '24000s' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, AuthRepository],
})
export class AuthModule {}
