import { Project } from './project.model';
import { User } from './user.model';

export interface Ticket {
  ticketId: number;
  crteTmst: Date;
  description?: string;
  ticketTitle: string;
  updtTmst: Date;
  project: Project;
  user: User;
  comments?: Array<Comment>;
}
