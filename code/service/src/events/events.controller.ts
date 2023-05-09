import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
  Post,
  UseGuards,
  Request,
  Delete,
} from '@nestjs/common';
import { EventDTO } from 'dto/event.dto';
import { Keywords } from 'dto/keywords.dto';
import { UUID } from 'types';
import { EventsService } from './events.service';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'auth/auth.guard';
import axios from 'axios';

const isIsoDate = (str) => {
  if (!/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/.test(str)) return false;
  const d = new Date(str);
  return d instanceof Date && d.toISOString() === str; // valid date
};

@ApiTags('events')
@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @UseGuards(AuthGuard)
  @Post('createEvent')
  createEvent(@Request() request) {
    const eventDto: EventDTO = request.body;
    if (!isIsoDate(eventDto.startDate) && !isIsoDate(eventDto.endDate)) {
      throw new BadRequestException('Dates must be in UTC format');
    }

    const createdEvent = {
      eventId: UUID.random(),
      ...eventDto,
      email: request.user.email,
    };

    this.eventsService.addEvent(createdEvent);

    return {
      message: 'Event created',
      eventId: createdEvent.eventId.toString(),
    };
  }

  @UseGuards(AuthGuard)
  @Get('/')
  getEvents(@Request() request) {
    return this.eventsService.getEvents(request.user.email);
  }

  @Get('public')
  async getEventsPublic() {
    return this.eventsService.getAllEvents();
  }

  @UseGuards(AuthGuard)
  @Get(':eventId')
  getEvent(@Param('eventId') eventId: string, @Request() request) {
    return this.eventsService.getEvent(
      UUID.fromString(eventId),
      request.user.email,
    );
  }

  @UseGuards(AuthGuard)
  @Delete(':eventId')
  deleteEvent(@Param('eventId') eventId: string, @Request() request) {
    return this.eventsService.deleteEvent(
      UUID.fromString(eventId),
      request.user.email,
    );
  }

  @UseGuards(AuthGuard)
  @Post(':eventId/addKeywords')
  addKeywords(
    @Param('eventId') eventId: string,
    @Body() keywords: Keywords,
    @Request() request,
  ) {
    this.eventsService.addKeywords(
      UUID.fromString(eventId),
      request.user.email,
      keywords.keywords,
    );
  }

  @UseGuards(AuthGuard)
  @Post(':eventId/createMeeting')
  async createMeeting(@Param('eventId') eventId: string, @Request() request) {
    return await this.eventsService.createMeeting(
      UUID.fromString(eventId),
      request.user.email,
      request.headers['zoom-auth'],
    );
  }
}
