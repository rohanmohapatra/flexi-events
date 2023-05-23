import { Module } from '@nestjs/common';
import { GoogleContoller } from './google.controller';
import { GoogleService } from './google.service';

@Module({
  imports: [],
  controllers: [GoogleContoller],
  providers: [GoogleService],
})
export class GoogleModule {}
