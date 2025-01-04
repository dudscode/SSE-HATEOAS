import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { IPayloadTicket, ITicket } from '../../interface/ticket.interface';


@Injectable({
  providedIn: 'root'
})
export class TicketService {
  api = 'http://localhost:8080/tickets';

  constructor(
    private zone: NgZone,
    private http: HttpClient
  ) { }

  getLastTickets(): Observable<ITicket[]> {
    return this.http.get<ITicket[]>(`${this.api}/last`);
  }
  createTicket(ticket: IPayloadTicket): Observable<ITicket> {
    return this.http.post<ITicket>(this.api, ticket);
  }

  getTicketCalled(ticket: number): Observable<any> {

    return Observable.create(
      (observer: any) => {

        let source = new EventSource(`${this.api}/sse/${ticket}`);
        source.onmessage = event => {
          this.zone.run(() => {
            const ticketData = JSON.parse(event.data);
            if (ticket === ticketData.id) {
              observer.next({
                ...ticketData,
                isMyTicket: true
              });
              source.close();
            }
            observer.next(event.data)
          })
        }

        source.onerror = event => {
          this.zone.run(() => {
            observer.error(event)
          })
        }
      }
    )
  };

  callTicket(ticket: number): Observable<any> {
    return this.http.post(`${this.api}/call/${ticket}`, {});
  };
  getTicketsNormal(): Observable<ITicket[]> {
    return this.http.get<ITicket[]>(`${this.api}/normal`);
  }
  getTicketsPreferred(): Observable<ITicket[]> {
    return this.http.get<ITicket[]>(`${this.api}/preferred`);
  }
  getHatetoas(url: string): Observable<any> {
    return this.http.get(url);
  }
  postHatetoas(url: string, body: any): Observable<any> {
    return this.http.post(url, body);
  }

}
