import { Ticket } from './ticket.model';

export interface Project {
  projectId: string;
  description: string;
  projectName: string;
  tickets?: Array<Ticket>;
}
