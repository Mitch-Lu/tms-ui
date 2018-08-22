import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ticket } from '../models/ticket.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http: HttpClient) {}

  public listAll(): Observable<Array<Ticket>> {
    return this.http.get<Array<Ticket>>(`${environment.baseUrl}/tms-tickets/v1/tickets`);
  }
}
