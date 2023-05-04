import { UUID } from 'types';

export interface Event {
  eventId: UUID;
  eventTitle: string;
  eventDescription: string;
  keywords: string[];
  startDate: string;
  endDate: string;
  eventLink: string;
  email: string;
}
