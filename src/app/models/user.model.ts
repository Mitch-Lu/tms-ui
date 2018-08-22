import { Ticket } from './ticket.model';

export interface User {
  userId: string;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  username: string;
  tickets?: Array<Ticket>;
}
