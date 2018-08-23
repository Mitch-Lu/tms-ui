import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Ticket } from '../models/ticket.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TicketService
{
  tickets$: BehaviorSubject<Ticket[]>;

  constructor(private http: HttpClient) {
    this.tickets$ = new BehaviorSubject<Ticket[]>([]);
  }

  public listAll(): Observable<Ticket[]> {
    return this.http.get<Array<Ticket>>(`${environment.baseUrl}${environment.ticketApi}${environment.version}/tickets`);
  }
}
