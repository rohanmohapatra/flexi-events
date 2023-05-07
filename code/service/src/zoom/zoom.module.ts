import { Module } from '@nestjs/common';
import { ZoomContoller } from './zoom.controller';
import { HttpModule } from '@nestjs/axios';
import { ZoomService } from './zoom.service';

@Module({
  imports: [HttpModule],
  controllers: [ZoomContoller],
  providers: [ZoomService],
})
export class ZoomModule {}
