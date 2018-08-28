import { Component, NgZone } from '@angular/core';
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
  constructor(private ticketService: TicketService, private ngZone: NgZone) {}

  get tickets(): Observable<Ticket[]> {
    return this.ticketService.tickets;
  }
}
