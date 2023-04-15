export interface EventDTO {
  eventTitle: string;
  eventDescription?: string;
  keywords?: string[];
  startDate: string;
  endDate: string;
  eventLink?: string;
}
