import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
  Post,
} from '@nestjs/common';
import { RegistrationService } from './registration.service';
import { ParticipantDTO } from 'dto/participant.dto';
import { UUID } from '../types';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('registration')
@Controller('events/:eventId/participants')
export class RegistrationController {
  constructor(private readonly registrationService: RegistrationService) {}

  @Get()
  getAll(@Param('eventId') eventId: string) {
    return this.registrationService.getAllParticipants(
      UUID.fromString(eventId),
    );
  }

  @Post('register')
  registerParticipant(
    @Param('eventId') eventId: string,
    @Body() participantDto: ParticipantDTO,
  ) {
    const rc = this.registrationService.createParticipant(
      UUID.fromString(eventId),
      participantDto,
    );
    if (rc) {
      return { message: 'Registered' };
    } else {
      throw new BadRequestException({ message: 'Unable to Register' });
    }
  }
}
