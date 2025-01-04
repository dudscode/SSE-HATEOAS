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

  getMessages(ticket: number): Observable<any> {

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
  }

}
