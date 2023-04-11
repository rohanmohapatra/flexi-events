import { types } from 'cassandra-driver';

export class Participant {
  eventId: types.Uuid;
  name: string;
  email: string;
  phoneNumber: string;
}
