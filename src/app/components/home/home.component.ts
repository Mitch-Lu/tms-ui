import { Component, OnDestroy, OnInit } from '@angular/core';
import { TicketService } from '../../services/ticket.service';
import { Observable, Subscription } from 'rxjs';
import { Ticket } from '../../models/ticket.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy
{
  private listAllSubscription: Subscription;

  constructor(private ticketService: TicketService) {}

  ngOnInit() {
    this.listAllSubscription = this.ticketService.listAll().subscribe(resp => {
      this.ticketService.tickets$.next(resp);
    });
  }

  get tickets(): Observable<Ticket[]> {
    return this.ticketService.tickets$.asObservable();
  }

  ngOnDestroy() {
    this.listAllSubscription.unsubscribe();
  }
}
