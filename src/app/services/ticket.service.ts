import { Injectable, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Ticket } from '../models/ticket.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TicketService
{
  private tickets$: BehaviorSubject<Ticket[]>;

  constructor(private http: HttpClient, private ngZone: NgZone) {
    this.tickets$ = new BehaviorSubject<Ticket[]>([]);
    this.publishAll();
    this.publishFromSSE();
  }

  private listAll(): Observable<Ticket[]> {
    return this.http
      .get<Ticket[]>(`${environment.baseUrl}${environment.ticketApi}${environment.version}/tickets`);
  }

  private publishAll(): void {
    this.listAll().subscribe(resp => {
        this.tickets$.next(resp);
    });
  }

  private publishFromSSE(): void {
    const eventSource = new EventSource(
      `${environment.baseUrl}${environment.ticketApi}${environment.version}/activity`);

    eventSource.onmessage = (evt) => {
      console.log(JSON.parse(evt.data));
      this.listAll().subscribe(resp => {
        this.ngZone.run(() => this.tickets$.next(resp));
      });
    };
    eventSource.onerror = () => {
      this.tickets$.error(console.log('EventSource Error!'));
      eventSource.close();
    };
  }

  get tickets(): Observable<Ticket[]> {
    return this.tickets$.asObservable();
  }
}
