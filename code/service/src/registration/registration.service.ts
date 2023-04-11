import { Injectable } from '@nestjs/common';
import { ParticipantDTO } from '../dto/participant.dto';
import { RegistrationRepository } from './registration.repository';
import { UUID } from '../types';

@Injectable()
export class RegistrationService {
  constructor(
    private readonly registrationRepository: RegistrationRepository,
  ) {}

  /**
   * Create participant for eventId
   * @param eventId
   * @param participant
   * @returns
   */
  async createParticipant(
    eventId: UUID,
    participant: ParticipantDTO,
  ): Promise<boolean> {
    // Add to cassandra
    const result = await this.registrationRepository.addParticipant({
      eventId: eventId,
      ...participant,
    });
    // return if able to add
    return result.wasApplied();
  }

  /**
   * Get participants list for an event
   * @param eventId
   * @returns
   */
  async getAllParticipants(eventId: UUID) {
    const participants = await this.registrationRepository.getParticipants(
      eventId,
    );
    return participants;
  }
}
