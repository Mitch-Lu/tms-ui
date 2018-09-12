import { Component } from '@angular/core';
import { TicketService } from '../../services/ticket.service';
import { Observable } from 'rxjs';
import { Ticket } from '../../models/ticket.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent
{
  constructor(private ticketService: TicketService) {}

  get tickets(): Observable<Ticket[]> {
    return this.ticketService.tickets;
  }
}
